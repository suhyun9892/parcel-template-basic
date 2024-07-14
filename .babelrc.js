module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [["@babel/plugin-transform-runtime"]],
};
// 우리가 앞으로 작성하는 모든 자바스크립트는 바벨을 통해서 es5 문법으로 변경되어 브러우저에서 동작
