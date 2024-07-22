/*===========================================================*/
/*機能編 5-1-25 クリックしたらナビ背景コンテンツがぼかされる※IE11非対応*/
/*===========================================================*/

$('.openbtn02').click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
  $('#g-nav02').toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
  $('#header02,#container,#footer').toggleClass('mainblur'); //ぼかしたいエリアにmainblurクラスを付与
});

$('#g-nav02 a').click(function () {
  //ナビゲーションのリンクがクリックされたら
  $('.openbtn02').removeClass('active'); //ボタンの activeクラスを除去し
  $('#g-nav02').removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去し
  $('#header02,#container,#footer').removeClass('mainblur'); //ぼかしているエリアのmainblurクラスを除去
});
