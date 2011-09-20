//	how long the descriptions will get
var LayoutLimit = {
	DescriptionLimit : 50,
};

//	adjusting the arrow on the fly
var ArrowMargin = {
	sakeViewStructure : 30,
	sakeViewContent : 72, 
	//next button : 110
};

//	an object to hold functions specific to this page
var TableSake = {
	reloadTableFields : function(gameID, tableID) {
		getTypeFields( gameID, tableID, function(data) {
		
			var appendHtml = '<tr><th width="30%">Name</th><th width="70%">Description</th></tr>';
			
			$(data).each(function() {
			
				this.description = unescape( this.description );
				
				//	this is disgusting, but I'm prototyping... bleh. 
				if( this.description.length > LayoutLimit.DescriptionLimit ) {
					var partDescription = this.description.substr( 0, LayoutLimit.DescriptionLimit );
					var restDescription = this.description.substr( LayoutLimit.DescriptionLimit, this.description.length );
					var dotdot = '...';
				} else {
					var partDescription = this.description;
					var restDescription = '';
					var dotdot = '';
				}
				
				//	this also makes me vomit
				if( restDescription != '' )
					var showMoreLink = '<a href="#" class="inlineGreenLink showMore">[ more ]</a>';
				else
					var showMoreLink = '';
			
				var rowHtml = 	'<tr><td><strong class="rowTitle">'+this.name+'</strong></a></td>' +
								'<td><a href="#'+this.name+'" class="trashIcon">delete</a><p class="rowDesc">'+unescape(partDescription)+
								'<span class="showMoreDotDot">'+dotdot+'</span><span class="showMoreContent">'
									+unescape( restDescription )+'</span>' +
								showMoreLink + '</p></td></tr>';				
				appendHtml += rowHtml;
			});
			
			$('#tableHolderTable').empty();
			$('#tableHolderTable').append(appendHtml);
		});
	},
	resetCreateFieldForm : function() {
		$('#fieldName').val('');
		$('#fieldDescription').val('');
	},
	hideAllContentHolders : function() {
		$('#tableHolderTable').hide();
		$('#tableInfoHolder').hide();
		$('#tableInfoContent').hide();
	},
};

$(document).ready(function() {

	//	adjust the arrow to highlight 'structure'
	$('.sakeLeftColumnArrow').css( { 'marginTop' : '30px' });

	//	get the query parameters
	var parameters = getQueryParameters();
	
	//	get the game id and set the title
	var gameID = parameters['gameid']; 
	$('#sakeTitleGameId').html(gameID);
	
	//	set the type id (table)
	//	and update the breadcrumb
	var tableID = parameters['typeid'];
	$('#sakeBreadcrumbTableName').html(tableID);
	$('#sakeBreadcrumbTableName').attr('href', 
		$('#sakeBreadcrumbTableName').attr('href') + '?gameid=' + gameID +'&typeid=' + tableID );
	$('#sakeTitleTableName').html(tableID);
	
	//	load the game data
	//	and update the title and breadcrumb
	getGameInfo( gameID, function(data) {
		$('#sakeTitleGameName').html(data.name);
		$('#sakeBreadcrumbGameName').html(data.name);
		$('#sakeBreadcrumbGameName').attr('href', 
			$('#sakeBreadcrumbGameName').attr('href') + '?gameid=' + gameID );
	});
	
	//	load the table data initially	
	TableSake.reloadTableFields( gameID, tableID );

	//	event handling
	$('.createFieldButton').click(function() {
		$('#createFieldForm').fadeIn('fast', function() {
			$('#fieldName').focus();
		});
		return false;	
	});
	
	//	form submission
	$('#createFieldForm').submit(function() {
		
		var fieldName = escape( $('#fieldName').val().replace(/ /g, '') );
		var fieldDesc = escape( $('#fieldDescription').val() );
		
		//	send the request, then append the field
		//	to the table? Not quite sure.
		//addTypeField = function(gameID,typeID, field,callback)
		addTypeField( gameID, tableID, { name: fieldName, description: fieldDesc }, function(data) {
			console.log(data);
			$('#createFieldFormResponse').fadeIn('fast');
			setTimeout( function() { $('#createFieldFormResponse').slideUp('fast'); }, 5000 );
			TableSake.reloadTableFields( gameID, tableID );
			TableSake.resetCreateFieldForm();
			//$('#createFieldForm').fadeOut('fast');
			$('#fieldName').focus();
		});
		
		return false;
	});
	
	//	navigation elements
	$('.changeSakeView').click(function() {
		
		var anchor = $(this).attr('href');
		var id = $(this).attr('id');
		
		$('.sakeLeftColumnArrow').animate({ 'marginTop' : ArrowMargin[id] + 'px' }, 200);
		
		TableSake.hideAllContentHolders();
		
		switch( id ) {
			case 'sakeViewStructure' :
				$('.createFieldButton').fadeIn('fast');
				//TableSake.reloadTableFields( gameID, tableID );
			break;
			
			case 'sakeViewContent' :
				$('.createFieldButton').fadeOut('fast');
				view( gameID, tableID, 0, 25, function(data) {
					console.log( data );
				});
			break;
		};
		
		$(anchor).fadeIn('fast');
		
		return false;
	});
	
	//	deleting a field
	$('#tableHolderTable .trashIcon').live('click',function() {
		
		if( confirm( 'Are you sure you want to delete this field permanently?' ) ) {
			var fieldID = $(this).attr('href').replace('#','');
			
			//deleteTypeField = function(gameID,typeID, field,callback){
			deleteTypeField( gameID, tableID, { name: fieldID }, function(data) {
				console.log( data );
				TableSake.reloadTableFields( gameID, tableID );
			});
		}
		
		return false;
	});
});