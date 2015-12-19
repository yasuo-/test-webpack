window.setTimeout(function(){
	require.ensure([], function(sub) {
		var sub = require('./sub');
		sub('app');		
	});
}, 4000);