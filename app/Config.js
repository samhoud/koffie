var koffieConfig  = new ConfigItem('koffie', 'img/bg_koffie.jpg', ['Bas', 'Monique', 'Benjamin', 'Leo'], 'audio/koffie.mp3');
var bierConfig 	  = new ConfigItem('bier', 'img/bg_bier.jpg', ['Bas'], false);
var tequilaConfig = new ConfigItem('tequila', 'img/bg_tequila.jpg', ['Bas', 'Patrick', 'Leo', 'Benjamin'], false);
var wijnConfig = new ConfigItem('wijn', 'img/bg_wijn.jpg', ['Monique'], false);

var configurations = [];
configurations['koffie'] 	= new ConfigItem('koffie', 'img/bg_koffie.jpg', ['Bas', 'Monique', 'Benjamin', 'Onno', 'Lukasz'], 'audio/koffie.mp3');
configurations['bier']   	= new ConfigItem('bier', 'img/bg_bier.jpg', ['Bas'], false);
configurations['tequila']	= new ConfigItem('tequila', 'img/bg_tequila.jpg', ['Bas', 'Patrick', 'Leo', 'Benjamin'], false);
configurations['wijn']   	= new ConfigItem('wijn', 'img/bg_wijn.jpg', ['Monique'], false);

var apiDetails  = {host: 'http://146.185.141.243', port: 3000, 'path': '/tag/api/checkins'};

Config = new Configuration(configurations, apiDetails);

function Configuration(configurations, apiDetails)
{
  this.configurations = configurations;
  this.api 			  = apiDetails;
}
Configuration.prototype.loadConfig = function(configKey){
    return this.configurations[configKey];
}

Configuration.prototype.loadApi = function(){
	return this.api;
}

function ConfigItem(naam, backgroundImageUrl, defaultHalers, soundFile){
	this.naam 				= naam;
	this.backgroundImageUrl = backgroundImageUrl;
	this.defaultHalers 		= defaultHalers;
	this.soundFile 			= soundFile;
}