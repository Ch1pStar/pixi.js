const PIXI = require('../../lib');

const init = ()=>{
	const renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight,{
		antialias: true,
		backgroundColor: 0xCCCCCC
	});
	document.body.appendChild(renderer.view);
	const stage = new PIXI.Container();

	const grpx = new PIXI.Graphics();
	// grpx.lineStyle(5, 123);
	grpx.beginFill(123);
	
	grpx.moveTo(0,0);
	grpx.lineTo(250,0);
	grpx.lineTo(250,250);
	grpx.lineTo(0,50);
	grpx.lineTo(0,0);

	grpx.endFill();
	grpx.x = 200;
	grpx.y = 200;
	stage.addChild(grpx);


    PIXI.loader.add('brick', 'img/brick_wall.png');

    PIXI.loader.load(loader=>{
        const brickRes = loader.resources['brick'];
        const txt = brickRes.texture;
        console.log(txt.valid);

        // const sp = new PIXI.Sprite(txt);
        // sp.x = 250;
        // sp.y = 500;
        // stage.addChild(sp);
    
        const grpx = new PIXI.Graphics();
        grpx.lineStyle(5, 0x00ff00);
        // grpx.beginFill(Math.random()*0xFFFFF);
        grpx.beginBitmapFill(txt);
        console.log(txt);

        grpx.moveTo(0,0);
        grpx.lineTo(250,0);
        grpx.lineTo(250,50);
        grpx.lineTo(0,50);
        grpx.lineTo(0,0);

        grpx.endFill();
        grpx.x = 200;
        grpx.y = 500;
        stage.addChild(grpx);
    });


	const render = t=>{
		requestAnimationFrame(render);
		renderer.render(stage);
	}
	render();

}

document.addEventListener('DOMContentLoaded', ()=>{
	init();
});