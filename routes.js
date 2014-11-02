module.exports = {

	load: function(app){
		app.get('/test', function(req,res){
			res.send({message:'hello world!'});
		})
	}
};