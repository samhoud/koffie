function Menu(element1, element2)
  {
    this.element1 = element1;
    this.element2 = element2;
  }

  Menu.prototype.toggle = function(){
    this.element1.el().toggle();
    this.element2.el().toggle();

  }
   Menu.prototype.hide = function() {
      this.element1.el().show();
      this.element2.el().hide();
   }
  Menu.prototype.show = function() {
      this.element1.el().show();
      this.element2.el().hide();
   }