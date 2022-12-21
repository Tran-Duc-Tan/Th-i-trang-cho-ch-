// JavaScript Document
$('#banner1').owlCarousel({
	loop:true,
	items:1,
	smartSpeed:1000,
	autoplay:true,
	autoplayTimeout:5000,
	nav:true,
})

$('#tes').owlCarousel({
    loop:true,
    margin:100,
    smartSpeed:1000,
    autoplay:true,
    autoplayTimeout:500000,
    responsive:{
        0:{
            items:1,
            dots:false, nav:true,
        },
        600:{
         items:1,   
        },
        1000:{
            items:2,
        }
    }
    
})




$.Tween.propHooks.number = {
  get: function(tween) {
    var num = tween.elem.innerHTML.replace(/^[^\d-]+/, "");
    return parseFloat(num) || 0;
  },

  set: function(tween) {
    var opts = tween.options;
    tween.elem.innerHTML =
      (opts.prefix || "") +
      tween.now.toFixed(opts.fixed || 0) +
      (opts.postfix || "");
  }
};

$("#num-1").animate(
  { number: 20 },
  {
    duration: 1000,
    postfix: "+"
  }
);

$("#num-2")
  .delay(500)
  .animate(
    { number: 2750 },
    {
      duration: 2000,
      postfix: "+"
    }
  );

$("#num-3")
  .delay(2000)
  .animate(
    { number: 2984 },
    {
      duration: 5000,
      postfix: "+"
    }
  );

$("#num-4")
  .delay(4000)
  .animate(
    { number: 1365 },
    {
      duration: 5000,
      postfix: "+"
    }
  );