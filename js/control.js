control = {
    
    init: function() {

        utils.log('here');

    }

};

utils = {
    
    log: function(msg) {

        try {
            console.log(msg);
        } catch(er) {
            //  DO NOWT
        }
    }

};