const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const packageJson = require('../package.json');
const reactAppName = packageJson.name;
const srcPath = path.resolve('src');

module.exports = {
  // 웹팩의 시작점 (엔트리포인트)
  entry: { [reactAppName]: srcPath + '/index.tsx' },
  // module이 resolve 되는 방식을 변경하는 옵션
  resolve: {
    // 웹팩에게 module을 resolve할 때, 어떤 디렉토리를 찾아야 하는지 알려준다.
    modules: [srcPath, 'node_modules'],
    // 자동으로 특정 확장자만 resolve한다.
    extensions: ['.ts', '.tsx', '...'],
  },
  // loader
  module: {
    rules: [
      // esbuild-loader는 esbuild를 통해 웹팩 빌드를 더 빠르게 수행하기 위한 로더입니다.
      // https://github.com/privatenumber/esbuild-loader
      {
        test: /\.(tsx|ts)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      // style-loader: 스타일 태그로 스타일링을 주입
      // MiniCssExtractPlugin: 별도의 CSS 파일로 추출
      // 장단점에 대해선 좀더 알아봐야 할 것 같다.
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  // webpack-dev-server 옵션
  devServer: {
    hot: true, // Hot Module Replacement: 모듈 전체를 다시 로드하지 않고 애플리케이션이 실행되는 동안 교환, 추가 또는 제거합니다.
    open: true, // 서버가 시작된 후 브라우저를 열도록 dev-server에 지시
    port: 3000, // port 지정
    historyApiFallback: true, // History API 또는 react-router 등을 사용하는 경우 새로고침 시 404 에러를 해결해주는 option
    allowedHosts: 'all', // 개발 서버에 접근할 수 있는 서비스 화이트리스트를 추가할 수 있음('all'로 설정하면 호스트 검사를 무시)
  },
  // 웹팩 결과물 출력 옵션
  output: {
    // 경로 및 파일명 지정
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[contenthash:8].js',
  },
  // 플러그인 설정
  plugins: [
    // 웹팩을 통해 번들링된 js를 주입한 html을 생성
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin(),
    // 번들링에 해시를 넣어 유니크한 이름을 넣어 만들때, 어떤 파일명으로 만들어졌는지 알수있게해줌
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: '/',
      generate: (seed, files) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);

        return {
          files: manifestFiles,
          id: reactAppName,
        };
      },
    }),
  ],
};
