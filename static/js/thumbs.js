const getThumbsUp = (arr) => {
  //备用数组
  const arrBackUp = ['+1', '❤', '👍', '👌'];
  if (arr) {
    if (!Array.isArray(arr)) throw new Error('the getThumbsUp function need an array argument to passed in')
  } else {
    arr = arrBackUp;
  }

  document.addEventListener('click', (e) => {
    //字符出现的x轴和y轴
    let x = e.pageX;
    let y = e.pageY;
    let span;

    //根据随机的index选择要显示的字符
    let index = Math.round(Math.random() * (arr.length - 1));
    let char = arr[index];
    //插入文档流
    span = document.createElement('span');
    span.innerHTML = char;
    span.className = 'animation'
    span.style.left = (x - span.clientWidth / 2) + 'px';
    span.style.top = (y - span.clientHeight / 2) + 'px';
    document.body.append(span)


    span.addEventListener('animationend', (e) => {
      span.parentNode.removeChild(span);
      //手动标记清除
      span = null;
    }, false)
  }, false)

}

getThumbsUp();
