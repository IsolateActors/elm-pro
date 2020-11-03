(function() {
  // 计算字体比例
  function resize() {
    var baseFontsize = 100; //设计稿100px相当于1rem,750px -->7.5rem，即为屏幕的100%
    var screenWidth = window.innerWidth; //屏幕宽度
    var desigWidth = 750; //设计稿的宽度
    var currentFontSize = (screenWidth / desigWidth) * baseFontsize + "px";

    document.querySelector("html").style.fontSize = currentFontSize;
  }

  //屏幕改变时执行函数
  window.onresize = function() {
    resize();
  };

  // 文档加载完成时执行
  document.addEventListener("DOMContentLoaded", resize);
})();
