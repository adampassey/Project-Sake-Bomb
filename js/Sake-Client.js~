var DB_URL = 'http://localhost:8080';


getGames = function(viewName,skip,limit,callback){
	jQuery.ajax(DB_URL+'/games/'+viewName+'/'+skip+'/'+limit,{'success':
		function(data){
			
			callback(data);
		}	
	});	
}

getGameInfo = function(gameID,callback){
	jQuery.ajax(DB_URL+'/game/'+gameID,{'success':
		function(data){
			
			callback(data);
		}	
	});
}

createGame = function(gameName,description,platform,callback){
	jQuery.ajax(DB_URL+'/create_game/'+gameName+'/'+description+'/'+platform,{'success':
		function(data){
			
			callback(data);
		}	
	});
	
}


createType = function(gameID,typeID, description, fields,callback){
	if(fields==null)
		fields = [];
	jQuery.ajax(DB_URL+'/create_type/'+gameID+'/'+typeID+'/'+description+'/'+escape(JSON.stringify(fields)),{'success':
		function(data){
			
			callback(data);
		}	
	});
}

getTypeFields = function(gameID,typeID,callback){

	jQuery.ajax(DB_URL+'/get_type_fields/'+gameID+'/'+typeID,{'success':
		function(data){			
			callback(data);
		}	
	});
}

createView = function(gameID,viewName,callback){
		jQuery.ajax(DB_URL+'/get_type_fields/'+gameID+'/'+typeID,{'success':
		function(data){
			
			callback(data);
		}	
	});

}


view = function(gameID,typeID,skip,limit,callback){	
		
	jQuery.ajax(DB_URL+'/view/'+gameID+'/'+typeID+'/'+skip+'/'+limit,{'success':
		function(data){
			
			callback(data);
		}	
	});

}

deleteType = function(gameID,typeID,callback){
		jQuery.ajax(DB_URL+'/delete_type/'+gameID+'/'+typeID,{'success':
		function(data){
			
			callback(data);
		}	
	});
}

addTypeField = function(gameID,typeID, field,callback){
		jQuery.ajax(DB_URL+'/add_type_field/'+gameID+'/'+typeID+'/'+escape(JSON.stringify(field)),{'success':
		function(data){
			
			callback(data);
		}	
	});
}

updateTypeField = function(gameID,typeID, field,callback){
		jQuery.ajax(DB_URL+'/update_type_field/'+gameID+'/'+typeID+'/'+escape(JSON.stringify(field)),{'success':
		function(data){
			
			callback(data);
		}	
	});
}

deleteTypeField = function(gameID,typeID, field,callback){
		jQuery.ajax(DB_URL+'/delete_type_field/'+gameID+'/'+typeID+'/'+escape(JSON.stringify(field)),{'success':
		function(data){
			
			callback(data);
		}	
	});
}


search = function(gameID,typeID,key,skip,limit,callback){	
		
	jQuery.ajax(DB_URL+'/search/'+gameID+'/'+typeID+'/'+key+'/'+skip+'/'+limit,{'success':
		function(data){
			
			callback(data);
		}	
	});

}

searchGames = function(viewName,key,skip,limit,callback){
	jQuery.ajax(DB_URL+'/search_games/'+viewName+'/'+key+'/'+skip+'/'+limit,{'success':
		function(data){
			
			callback(data);
		}	
	});	
}
