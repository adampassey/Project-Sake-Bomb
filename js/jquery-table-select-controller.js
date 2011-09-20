var pageSize= 24;
var page= 1;
var pageMax= 1;
var gameID;
//	how long the descriptions will get
var LayoutLimit = {
	DescriptionLimit : 250,
};


var reloadTable = function(){
	view( gameID, 'prototype', (page-1)*pageSize, pageSize, viewCallback);
}


var viewCallback = function(data) {
	pageMax=Math.ceil(data.total_rows/pageSize);

	callbackInner(data);

	$('#paginationHolder').empty();
	createPagination('#paginationHolder', function(skip, limit){				
		view(gameID,'prototype',skip,limit,viewCallback);				
	});													
}

var searchCallback = function(data){
	
	pageMax=Math.ceil(data.rows.length/pageSize);
	
	callbackInner(data);

	$('#paginationHolder').empty();
	createPagination('#paginationHolder', function(skip, limit){				
		search(gameID,'prototype',searchKey,skip,limit,searchCallback);				
	});														
	
}


var callbackInner = function(data){
	
			
			var appendHtml = '<tr><th>Table Name</th><th>Description</th></tr>';
		
			//console.log( 'view: ' );
			//console.log( data );
			


			
			$(data.rows).each(function() {
				
				
				this.value.description = unescape( this.value.description );
				
				//	this is disgusting, but I'm prototyping... bleh. 
				if( this.value.description.length > LayoutLimit.DescriptionLimit ) {
					var partDescription = this.value.description.substr( 0, LayoutLimit.DescriptionLimit );
					var restDescription = this.value.description.substr( LayoutLimit.DescriptionLimit, this.value.description.length );
					var dotdot = '...';
				} else {
					var partDescription = this.value.description;
					var restDescription = '';
					var dotdot = '';
				}
				
				//	this also makes me vomit
				if( restDescription != '' )
					var showMoreLink = '<a href="#" class="inlineGreenLink showMore">[ more ]</a>';
				else
					var showMoreLink = '';
			
				var rowHtml = 	'<tr><td><a href="table-selected.html?gameid='+gameID+'&typeid='+this.value._id+'" class="rowTitle">'+this.value._id+'</a></td>' +
								'<td><a href="#'+this.value._id+'" class="trashIcon">delete</a><p class="rowDesc">'+unescape(partDescription)+
								'<span class="showMoreDotDot">'+dotdot+'</span><span class="showMoreContent">'
									+unescape( restDescription )+'</span>' +
								showMoreLink + '</p></td>';				
				appendHtml += rowHtml;
				
				
			});
			
			$('#tableHolderTable').empty();
			$('#tableHolderTable').append(appendHtml);
			

}

/**
* Search
*/
// this is the keyup timer
// it will be reset everytime the user has a keyup event
// and will then fire the updateSearchResults() function
// after x amount of tim
var searchKeyupTimer;
var searchKey;

var updateSearchResults = function() {
var searchVal = escape( $('#searchTablesInput').val());
console.log( 'updateSearchResults based on: ' + searchVal );



if(searchVal!=null && searchVal!=''){
	searchKey = searchVal;
	page = 1;
	search(gameID,'prototype',searchKey,0,pageSize,searchCallback);				
}
else{
	page = 1;
	reloadTable();
}


};





$(document).ready(function() {
	
	//	get the query parameters
	var parameters = getQueryParameters();
	
	//	get the game id and set the title
	gameID = parameters['gameid']; 
	//console.log( 'game is: ' + gameID );
	$('#sakeTitleGameId').html(gameID);
	
	//	load the game data
	//	and update the title and breadcrumb
	getGameInfo( gameID, function(data) {
		//console.log( 'getGameInfo:' );
		//console.log( data );
		$('#sakeTitleGameName').html(data.name);
		$('#sakeBreadcrumbGameName').html(data.name);
		$('#sakeBreadcrumbGameName').attr('href', 
			$('#sakeBreadcrumbGameName').attr('href') + '?gameid=' + gameID );
	});
	
	reloadTable();
	
	$('.createTableButton').click(function() {
		$('#createTableForm').fadeIn('fast', function() {
			$('#tableName').focus();
		});
		return false;	
	});
	
	$('#createTableForm').submit(function() {
		
		var fieldName = escape( $('#tableName').val() );
		var fieldDesc = escape( $('#tableDescription').val() );
		
		//	send the request, receive the ID back and
		//	then take the user to that tables page.
		createType(gameID,fieldName,fieldDesc,null,function(data){
			window.location = ('table-selected.html?gameid='+gameID+'&typeid='+data._id);
		});		
		
		return false;
	});
	
	$('#tableHolderTable .trashIcon').live('click',function() {
		
		if( confirm( 'Are you sure you want to delete this table permanently?' ) ) {
			var typeID = $(this).attr('href').replace('#','');
			
			//deleteTypeField = function(gameID,typeID, field,callback){
			deleteType( gameID, typeID, function(data) {
				reloadTable();
			});
		}
		
		return false;
	});
	
	// begin by adding a listener to keyup on the search field
	$('#searchTablesInput').keyup(function() {
		console.log( 'keyup' );
		clearTimeout(searchKeyupTimer);
		searchKeyupTimer = setTimeout( updateSearchResults, 500 );
	});	
	
	
});