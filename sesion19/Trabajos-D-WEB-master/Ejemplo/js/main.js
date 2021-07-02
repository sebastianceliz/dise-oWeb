(function($){
	var container = $(".container");
	var box = $(".box");
	var buddy = $(".buddy");			
	var pop = $(".pop");			
	var open = $(".btn");
	var close = $(".close");
	var imgs = pop.find('img');

	$.Velocity.RegisterUI('new.slideUpIn',{
		defaultDuration : 500,
		calls : [
			[{opacity:[1,0],translateY : [0,100]}]
		]
	}); 
	$.Velocity.RegisterUI('new.slideDownOut',{
		defaultDuration : 300,
		calls : [
			[{opacity:[0,1],translateY : [100,0]}]
		]
	}); 
	$.Velocity.RegisterUI('new.scaleIn',{
		defaultDuration : 300,
		calls : [
			[{opacity:[1,0],scale : [1,0.3]}]
		]
	}); 	
	$.Velocity.RegisterUI('new.scaleOut',{
		defaultDuration : 300,
		calls : [
			[{opacity:[0,1],scale : [0.3,1]}]
		]
	}); 		

	var seq = [{
		elements:container,
		properties : 'new.slideUpIn',
		options : {
			delay:300
		}
	},{
		elements:box,
		properties : 'new.slideUpIn',
		options : {
			// delay:300
			sequenceQueue:false
		}
	},{
		elements:buddy,
		properties : 'new.slideUpIn',
		options : {
			sequenceQueue:false,
			delay:60
		}
	}];
	var seqClick = [{
		elements:container,
		properties:'new.slideDownOut'
	},{
		elements:box,
		properties:'new.slideDownOut',
		options:{
			sequenceQueue:false
		}
	},{
		elements:container,
		properties:'new.slideUpIn',
	},{
		elements:pop,
		properties:'new.slideUpIn',
		options:{
			sequenceQueue:false
		}
	},{
		elements:imgs,
		properties:'new.scaleIn',
	}];

	var seqClose = [{
		elements:imgs,
		properties:'new.scaleOut',
	},{
		elements:container,
		properties:'new.slideDownOut'
	},{
		elements:pop,
		properties:'new.slideDownOut',
		options:{
			sequenceQueue:false
		}
	},{
		elements:container,
		properties:'new.slideUpIn',
	},{
		elements:box,
		properties:'new.slideUpIn',
		options:{
			sequenceQueue:false
		}
	}];
	$.Velocity.RunSequence(seq);

	open.on('click',function(){
		$.Velocity.RunSequence(seqClick);
	});
	close.on('click',function(){
		$.Velocity.RunSequence(seqClose);
	});
})(jQuery);