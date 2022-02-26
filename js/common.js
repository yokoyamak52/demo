// JavaScript Document
        
// ドロップダウンメニュー
$('.dropdown-btn').hover(
  function() {
    //カーソルが重なった時
    $(this).children('.dropdown').addClass('open');
  }, function() {
    //カーソルが離れた時
    $(this).children('.dropdown').removeClass('open');
  }
);
 
// グローバルナビの開閉
$(function() {
  $('.nav-button-wrap').on('click', function() {
    if ($(this).hasClass('active')) {
      // スマホ用メニューが表示されていたとき
      $(this).removeClass('active');
      $('.globalnav').addClass('close');
      $('.globalnav-wrap , body').removeClass('open');
    } else {
      // スマホ用メニューが非表示の時
      $(this).addClass('active');
      $('.globalnav').removeClass('close');
      $('.globalnav-wrap , body').addClass('open');
    }
  });
});
        
        // スライダー
		let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
}
new Swiper('.swiper', swipeOption);

$(function() {
  $('.visible').on('inview', function(event, isInView) {
  //一度のみのinviewの際は　.oneにする
    if (isInView) {
		// .visibleがビューポートに入った場合
    	$(this).addClass('effect');
    } else {
		// .visibleがビューポートにから抜けた場合
    	$(this).removeClass('effect');
    }
	//$('#footer').off('inview');
  });
});