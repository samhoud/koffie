var koffieConfig  = new ConfigItem('koffie', 'img/bg_koffie.jpg', ['Bas', 'Monique', 'Benjamin', 'Leo'], 'audio/koffie.mp3');
var bierConfig 	  = new ConfigItem('bier', 'img/bg_bier.jpg', ['Bas'], false);
var tequilaConfig = new ConfigItem('tequila', 'img/bg_tequila.jpg', ['Bas', 'Patrick', 'Leo', 'Benjamin'], false);
var wijnConfig = new ConfigItem('wijn', 'img/bg_wijn.jpg', ['Monique'], false);


var configurations = [];
configurations['koffie'] 	= new ConfigItem('koffie', 'img/bg_koffie.jpg', ['Bas', 'Monique', 'Benjamin', 'Onno', 'Lukasz'], 'audio/koffie.mp3');
configurations['bier']   	= new ConfigItem('bier', 'img/bg_bier.jpg', ['Bas'], false);
configurations['tequila']	= new ConfigItem('tequila', 'img/bg_tequila.jpg', ['Bas', 'Patrick', 'Leo', 'Benjamin'], false);
configurations['wijn']   	= new ConfigItem('wijn', 'img/bg_wijn.jpg', ['Monique'], false);

Config = new Configuration(configurations);

function Configuration(configurations)
{
  this.configurations = configurations;
}
Configuration.prototype.loadConfig = function(configKey){
    return this.configurations[configKey];
}

function ConfigItem(naam, backgroundImageUrl, defaultHalers, soundFile){
	this.naam 				= naam;
	this.backgroundImageUrl = backgroundImageUrl;
	this.defaultHalers 		= defaultHalers;
	this.soundFile 			= soundFile;
}
