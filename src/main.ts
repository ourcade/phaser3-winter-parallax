import Phaser from 'phaser'

import GameScene from './scenes/Game'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 450,
	physics: {
		default: 'matter',
		matter: {
			gravity: { y: 1 },
			setBounds: true
		}
	},
	scene: [
		GameScene,
	],
	scale: {
		mode: Phaser.Scale.ScaleModes.FIT
	}
}

export default new Phaser.Game(config)
