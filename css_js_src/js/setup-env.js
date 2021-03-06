Backbone.LoadModelsFromUrl("/essay_site/api/v1/?format=json");
waitForSchema = function(fn, attemptsLeft) {
    var tick = attemptsLeft || 30;

    if (typeof(_schema_loaded) != 'boolean') {
        if (tick > 1) {
            //recurse
            setTimeout(function() {
                waitForSchema(fn, tick - 1);
            }, 100)
        }
        else {
            console.log('Failed to load schema.');
        }
    }
    else {
        fn();
    }
}


waitForModel= function(definedobj, fn,  attemptsLeft) {
    var tick = attemptsLeft || 30;
    try
    {
        eval(definedobj);
        fn();
    }
    catch(err){
        if (tick > 1) {
            //recurse
            setTimeout(function() {
                waitForModel(definedobj, fn, tick - 1);
            }, 100)
        }
        else {
            console.log('Failed to load models.');
        }
    }
}