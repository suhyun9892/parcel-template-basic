// ESM 에크마 스크립트 모듈
// CommonJS node.js 환경에서 동작함

// import autoprefixer from 'autoprefixer'
// const autoprefixer = require("autoprefixer");

//export {plugins: [
//   autoprefixer
// ]}
module.exports = {
  Plugin: [require("autoprefixer")],
};
