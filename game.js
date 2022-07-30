import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
import loader from './loader.js';

const boomOpts = {
  width: window.innerWidth,
  height: window.innerHeight,
  canvas: document.getElementById('kaboom'),
  crisp: true,
  background: [0,0,0],
  global: true,
  font: 'kafont',
}
  
kaboom(boomOpts);
loader()

scene('play', () => {
	const world = addLevel([
		"            ",
		"            ",
		"            ",
		"            ",
		"            ",
		"            ",
	], {
		width: 26*2,
		height: 26*2,
		" ": () => [
			sprite(`grass${chance(0.5) ? 3 : (chance(0.5) ? 1 : 2) }`),
			scale(2),
		],
		"t": () => [
			sprite(`tree${randi(1) + 1}`),
			scale(2),
			area(),
			solid(),
		]
	})

	const boundaries = addLevel([
		"tttttttttttt",
		"t          t",
		"t          t",
		"t          t",
		"t          t",
		"tttttttttttt",
	], {
		width: 26*2,
		height: 26*2,
		"t": () => [
			sprite(`tree${randi(1) + 1}`),
			scale(2),
			area(),
			solid(),
		]
	});

	const player = add([
		sprite('mark', {anim: 'idle'}),
		pos(60, 140),
		area(),
		solid(),
		{
			walking: false,	
		}
	])

	onKeyDown(['left', 'right', 'up', 'down'], ()=>{
		player.walking = true;
	})
	onKeyRelease(['left', 'right', 'up', 'down'], ()=>{
		player.walking = false;
	})

	onKeyDown('left', () => {
		player.flipX(true);
		player.move(-120, 0)
	})
	onKeyDown('right', () => {
		player.flipX(false);
		player.move(120, 0)
	})
	onKeyDown('up', () => {
		player.move(0, -120)
	})
	onKeyDown('down', () => {
		player.move(0, 120)
	})

	const handleAnims = () => {
		const anim = player.curAnim()
		if(player.walking){
			if(anim !== "walking"){
				player.play('walking');
			}
		}else {
			if(anim !== "idle"){
				player.play('idle');
			}
		}
	}

	onUpdate(() => {
		handleAnims();
	})

	camScale(vec2(2, 2)),
	camPos(player.pos)
})

go('play')