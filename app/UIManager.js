function UserInterfaceManager(halers, debugMode){
  this.halers = halers;
  this.debugMode = debugMode;
  this.animationDuration = 605;
  this.animationTimes = 5;
  this.soundIsAvailable = false;
}

UserInterfaceManager.prototype.init = function(){
this.renderHalerList();  
this.renderTitels();
}

UserInterfaceManager.prototype.start = function(){
  menu.hide();
  startButton.hide();

  if(this.soundIsAvailable){
    sound.play();
  }

  this.spannendHe(this.getHalert());  
}



UserInterfaceManager.prototype.reload = function(){
  halert.fadeOut();
  spannend.show();
  startButton.show();
  reloadButton.hide();
}

UserInterfaceManager.prototype.getHalert = function(){
  var haler = Math.floor((Math.random() * (this.halers.length)));
  return this.halers[haler];
}


UserInterfaceManager.prototype.spannendHe = function(gekozenHalert){
    var count = 0;
    for( var i =0; i <= this.animationTimes; i++)
    {
        times = this.animationTimes;
        spannend.el().animate({opacity: 0}, {duration: this.animationDuration}).animate({opacity: 1}, this.animationDuration, function(){
            if(count == times)
            {
                spannend.el().fadeOut(function(){
                  halert.el().text(gekozenHalert);
                  halert.fadeIn();
                  reloadButton.show();
                });
            }
            count++;
        });  
    }
}

UserInterfaceManager.prototype.addHalert = function(naam){
this.halers.push(naam);   
}

UserInterfaceManager.prototype.halers = function(halers){
this.halers = halers;
}

UserInterfaceManager.prototype.renderTitels = function(){
  document.title = 'Wie gaat er ' + appNaam + ' halen?';
  appHeaderTekst.el().text('Wie haalt ' + appNaam + '?');
}

UserInterfaceManager.prototype.removeHalert =  function(lijstnummer)
{
 this.halers = _.reject(this.halers, function(name,key ){ return key == lijstnummer; });
}

UserInterfaceManager.prototype.renderHalerList = function(){
var list = deelnemersUl.el();
list.html("");

for (var i = 0; i < this.halers.length; i++) {
  var list_item = this.renderItem(i, this.halers[i]);
  list.append(list_item);
};
}

UserInterfaceManager.prototype.renderItem = function(key, naam){
  return '<li class="list-group-item" data-lijstnummer="' + key +'"><span class="remove-badge"><i class="glyphicon glyphicon-trash"></i></span>'+ naam +'</li>';
}

UserInterfaceManager.prototype.soundAvailable = function(isAvailable){
  this.soundIsAvailable = isAvailable;
} 

UserInterfaceManager.prototype.renderBackgroundImage = function(imageUrl){
  $('.header').css('background', 'url(' + imageUrl + ') no-repeat center center scroll');
  $('.header').css('-webkit-background-size', 'cover');
  $('.header').css('-moz-background-size', 'cover');
  $('.header').css('background-size', 'cover');
  $('.header').css('-o-background-size', 'cover');
}