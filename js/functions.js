var pContainerHeight = $('.cake-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.back-cake').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.fore-cake').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

  }

  
  if(wScroll > $('.chef-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.chef-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.chef-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.chef-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }

});
