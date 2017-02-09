var GameState = {
	init: function() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	},
	preload: function() {
		this.load.image('ground', 'assets/images/ground.png');
		this.load.image('platform', 'assets/images/platform.png');
		this.load.image('goal', 'assets/images/gorilla3.png');
		this.load.image('arrowButton', 'assets/images/arrowButton.png');
		this.load.image('actionButton', 'assets/images/actionButton.png');
		this.load.image('barrel', 'assets/images/barrel.png');

		this.load.spritesheet('player', 'assets/images/plater_spritesheet.png', 28, 30, 5, 1, 1)
		this.load.spritesheet('fire', 'assets/images/fire_spritesheet.png', 20, 21, 2, 1, 1)
	}
}