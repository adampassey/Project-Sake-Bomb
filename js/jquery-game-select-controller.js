
var pageSize = 24;
var page = 1;
var pageMax;	
var platform;	
	
	
function loadPlatform(plat){
	
	platform = plat;
	page = 1;

	getGames(platform,0,pageSize,getGamesCallback);


}		
	
function getGamesCallback(data){
	if(!data|| !data.rows ||data.rows.length==0){
		$('.sakeRightColumnInterior').html('Sorry, you have no games for this platform.');		
	}else{
		
		pageMax=Math.ceil(data.total_rows/pageSize);
		
		$('.sakeRightColumnInterior').html('<ul class="griddedGameSelect"></ul>');
		
		for(var i = 0; i< data.rows.length; i++){
			$('.griddedGameSelect').append('<li><a href="table-select.html?gameid='+data.rows[i].value._id+'"><img src="../img/boxart-na.png" alt="boxart-sm" width="53" height="76" class="boxart-sm" /><strong class="gametitle">'+data.rows[i].value.name+'</strong><span class="gameid">'+data.rows[i].value._id+'</span></a></li>');
		}
		
		createPagination('.sakeRightColumnInterior',function(skip,limit){
			getGames(platform,skip,limit,getGamesCallback);
			
		});
				
	}
}


function populateSakeLeftColumn(){
	
	
	$('.sakeLeftColumn').html('<div class="sakeLeftColumnArrow">');
	
	var platforms = [
    		{'name':'ALL','value':'all'},
    		{'name':'PC','value':'pc'},
    		{'name':'Sony PS3','value':'ps3'},
    		{'name':'Sony PSP','value':'psp'},
    		{'name':'Sony PSN','value':'psn'},
    		{'name':'Nintendo Wii','value':'wii'},
    		{'name':'Nintendo DS','value':'ds'},
    		{'name':'Xbox 360','value':'x360'},
    		{'name':'XBLA','value':'xbla'},
    		{'name':'iPhone','value':'iphone'},
    		{'name':'iPad','value':'ipad'},
    		{'name':'Android','value':'android'},
    		{'name':'Mac','value':'mac'},
    		{'name':'Linux','value':'linux'},
    		];


    		
	$('.sakeLeftColumn').append('<ul></ul>')
       	
   
   	for(var i = 0; i< platforms.length; i++){
   		
   		(function(number){
   			
   			$('.sakeLeftColumn ul').append('<li><a class="sakeLeftItem'+number+'" href="#">'+platforms[number].name+'</a></li>');
   			
   			$('.sakeLeftItem'+number).click(function(event){
   				$('.sakeLeftColumnArrow').animate({'margin-top':(40*number + 42)},500,'swing');
   				
   				loadPlatform(platforms[number].value);
   				
   				event.preventDefault();
   			});
   			    	
    	
    	})(i);

	}
	
}













$(document).ready(function(){
	
	populateSakeLeftColumn();	
	loadPlatform('all');
	
});
