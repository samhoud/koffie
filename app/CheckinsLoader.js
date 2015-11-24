function Loader(api){
    this.api = api
}

Loader.prototype.apiUrl = function(){
    var url = this.api.host;

    if(typeof this.api.port !== 'undefined'){
        url += ':' + this.api.port;
    }
    url += this.api.path;
    return url;

}

Loader.prototype.get = function(callback){
    $.getJSON( this.apiUrl())
        .done(function( data ) {
            var _halers = [];
            for(var i = 0; i < data.length; i++){
                if(data[i]._owner !== null ) {
                    var ownerName = data[i]._owner.name;
                    if (_halers.indexOf(ownerName) < 0) {
                        _halers.push(ownerName);
                    }
                }
            }
           callback(_halers);
    }).error(function(err){
        callback(false);
    });
};