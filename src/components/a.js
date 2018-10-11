import b from './b'
export default {
  print(world) {
    console.log(b + ',' + world)
  },
  set(world) {
    let div = document.getElementById('app')
    div.innerText = b + world
  }
}
