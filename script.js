const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');
var goose = document.querySelector('canvas#goose');
let timerstart = Date.now()
let vars = [0, 0, 16, 10]
let keys = {a:false,d:false,w:false,s:false}
function drawGoose(options) {
  let ref = document.querySelector('img#goose');
  
  let ocanvas = document.querySelector('canvas#goose');
  ocanvas.width = ref.naturalWidth;
  ocanvas.height = ref.naturalHeight;
  let octx = ocanvas.getContext('2d');
  octx.clearRect(0, 0, ocanvas.width, ocanvas.height);
  octx.drawImage(ref, 0, 0);
  return;
}
function timer() {
  return (Date.now() - timerstart) / 1000
}
ctx.fillStyle = "white"
drawGoose()
function render() {
  vars[0]+= (keys.d - keys.a) * 5;
  vars[1]+= vars[3]+(keys.s - keys.w) * 5;
  if (vars[3] > 10) {vars[3] = 10}
  if (vars[0] > 960) { vars[2]-=960}
  if (vars[0] < 0) {vars[2]+=960}
  if (vars[1] > 600) {vars[1]-=600}
  if (vars[1] < 0) {vars[1]+=600}
  goose = document.querySelector('canvas#goose');
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(goose, vars[0], vars[1]);
}
setInterval(render, 8.35)
document.addEventListener("keydown", (e)=>{
  keys[e.key] = true
});
document.addEventListener("keyup", (e)=>{
  keys[e.key] = false
});
