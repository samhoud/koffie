function Element(selector)
{
  this.selector = selector;
  this.element  = $(selector);
}

 Element.prototype.el = function(){
    return this.element;
 }

Element.prototype.show = function(){
  this.element.show();
 }

 Element.prototype.hide = function(){
  this.element.hide();
 }

 Element.prototype.invisible = function(){
    this.element.css('visibility', 'hidden');
 }

 Element.prototype.visible = function(){
    this.element.css('visibility', 'visible');
 }

 Element.prototype.fadeIn = function(){
  this.element.fadeIn();
 }

 Element.prototype.fadeOut = function(){
  this.element.fadeOut();
 }

 Element.prototype.click = function(callback){
     this.element.click(function(){
        callback();
     });
 }