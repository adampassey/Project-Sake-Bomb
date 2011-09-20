$(document).ready(function() {

	//	adjust that little arrow button
	$('.sakeLeftColumnArrow').css( { 'marginTop' : '30px' });

	//	get the query parameters
	var parameters = getQueryParameters();
	
	//	set the game id
	var gameID = parameters['gameid']; 
	console.log( 'game is: ' + gameID );
	$('#sakeTitleGameId').html(gameID);
	
	//	set the type id (table)
	//	and update the breadcrumb
	var tableID = parameters['typeid'];
	console.log( tableID.indexOf( '#' ) != -1 );
	if( tableID.indexOf( '#' ) != -1 )
		tableID = tableID.substr( 0, tableID.length - 1 );
	console.log( 'type (table) id is: ' + tableID );
	$('#sakeBreadcrumbTableName').html(tableID);
	$('#sakeBreadcrumbTableName').attr('href', 
		$('#sakeBreadcrumbTableName').attr('href') + '?gameid=' + gameID +'&typeid=' + tableID );
	$('#sakeTitleTableName').html(tableID);
	
	//	load the game data
	//	and update the title and breadcrumb
	getGameInfo( gameID, function(data) {
		console.log( 'getGameInfo:' );
		console.log( data );
		$('#sakeTitleGameName').html(data.name);
		$('#sakeBreadcrumbGameName').html(data.name);
		$('#sakeBreadcrumbGameName').attr('href', 
			$('#sakeBreadcrumbGameName').attr('href') + '?gameid=' + gameID );
	});
	
});