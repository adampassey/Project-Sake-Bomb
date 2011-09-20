/* retrieve query parameters */
function getQueryParameters() {
    var url = window.location.toString();
    //get the parameters
    url.match(/\?(.+)$/);
    var params = RegExp.$1;
    // split up the query string and store in an
    // associative array
    var params = params.split("&");
    var queryStringList = {};
    
    for(var i=0;i<params.length;i++)
    {
        var tmp = params[i].split("=");
        if( tmp[1].indexOf( '#' ) != -1 )
			tmp[1] = tmp[1].substr( 0, tmp[1].length - 1 );
        queryStringList[tmp[0]] = unescape(tmp[1]);
    }
    
    return queryStringList;
};


function createPagination(container,callback){
		
	
	$(container).append('<ul class="sakePaginationList"></ul>');

	
	var createPageNumber = function(number, string){
		
		$('.sakePaginationList').append('<li><a class="'+('sakePage'+number) +((page==number)?' active':'')+'" href="#">'+(string?string:number)+'</a></li>');
		
		$('.sakePage'+number).click( function(event){
			page = number;
			
			callback((number-1)*pageSize, pageSize);
			
			event.preventDefault();
		});
	}
	
	if(pageMax>1){
	
	if(page>1)
		createPageNumber(page-1,'&laquo;');
	
	for(var i = 1; i<= 3 && i<=pageMax; i++){
		createPageNumber(i);		
	}
	if(page>=6)
		$('.sakePaginationList').append('<li>...</li>');		
	
	for(var i = (page-1>3 ? page-1:4); i<= (page+1<pageMax-2?page+1:pageMax-3);i++){
		createPageNumber(i);
	}
	
	if(page<=pageMax-5)
		$('.sakePaginationList').append('<li>...</li>');
		
	for(var i = (pageMax-2>3?pageMax-2:4); i<=pageMax;i++){
		createPageNumber(i);
	}
	
	if(page<pageMax)
		createPageNumber(page+1,'&raquo;');
	
	}
}




$(document).ready(function() {
	$('.defaultCancel').click(function() {
		//var modal = $(this).parent().parent().parent().parent('.popupForm');	//	parent().parent().vomit().
		$('.popupForm').fadeOut('fast');
		return false;
	});
	
	$('.showMore').live('click',function() {
		$('.showMoreDotDot', $(this).parent('p') ).toggle();
		$(this).prev('.showMoreContent').toggle();
		if( $(this).html() == '[ more ]' )
			$(this).html('[ less ]');
		else
			$(this).html('[ more ]' );
		return false;
	});

});