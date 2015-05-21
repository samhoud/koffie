function Sound(element, soundfileSrc) {
      this.element = element;
      this.src     = soundfileSrc;
  }
  
  Sound.prototype.play = function(){
    this.element.el().html("");
    var embed = document.createElement("embed");
    embed.id= "embed";
    embed.setAttribute("src", this.src);
    this.element.el().append(embed);
}