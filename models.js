module.exports = function(App)
{
	App.models.users = App.ModelBase.extend(
	{
		'timestamps': true,
		'paranoia': true,
		'fields': {
			"name": {

			},

			"age": {
				
			}
		},
		'scopes': {
			young: function()
			{

			}	
		},
		'instances': {
			is_alive: function()
			{

			}
		}
	});
}