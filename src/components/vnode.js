var snabbdom = require('snabbdom')
var patch = snabbdom.init([
  // Init patch function with chosen modules
  require('snabbdom/modules/class').default, // makes it easy to toggle classes
  require('snabbdom/modules/props').default, // for setting properties on DOM elements
  require('snabbdom/modules/style').default, // handles styling on elements with support for animations
  require('snabbdom/modules/dataset').default,
  require('snabbdom/modules/eventlisteners').default // attaches event listeners
])
function vnodeObject() {
  var h = require('snabbdom/h').default // helper function for creating vnodes

  var container = document.getElementById('app')

  var vnode = h(
    'div#container.two.classes',
    {
      on: {
        //添加事件
        click: function() {
          alert(1)
        }
      },
      props: {
        //添加属性
        name: 'xxx',
        title: '11111111'
      },
      style: {
        //添加样式
        'background-color': '#ccc'
      },
      dataset: {
        //自定义属性
        iid: 'xx1'
      }
    },
    [
      h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
      ' and this is just normal text',
      h('a', { props: { href: '/foo' } }, "I'll take you places!")
    ]
  )
  // Patch into empty DOM element – this modifies the DOM as a side effect
  patch(container, vnode)
}

export default vnodeObject
