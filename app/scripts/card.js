$(function() {
  $(document).on('mousemove', '.card-background', function(event) {
    var halfW = (this.clientWidth / 2);
    var halfH = (this.clientHeight / 2);
    var coorX = (halfW - (event.pageX - this.offsetLeft));
    var coorY = (halfH - (event.pageY - this.offsetTop));
    var degX  = ((coorY / halfH) * 10) + 'deg';
    var degY  = ((coorX / halfW) * -10) + 'deg';

    $(this).css('transform', function() {
      return 'perspective(600px) translate3d(0, -2px, 0) scale(1.1) rotateX('+ degX +') rotateY('+ degY +')';
    }).children('.summary').css('transform', function() {
      return 'perspective(600px) translate3d(0, 0, 0) rotateX('+ degX +') rotateY('+ degY +')';
    });
  })
    .on('mouseout', '.card-background', function() {
    $(this).removeAttr('style')
      .children('.summary')
      .removeAttr('style');
  });
});
