function getFirstSelector(selector) {
  var first = document.querySelector(selector)
  return first
}

function nestedTarget() {
return  document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }

}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
var mostDeep = nodes[nodes.length- 1];
return mostDeep
}
