$(function(){
/* 
* 燈箱開啟功能
*/
// 先準備好要裝「圖片路徑」的箱子（變數）
let photoSrc = '';

// 監聽我們要點擊的元素：每張圖片容器
$('.portfolio__items__container').click(function() {
 
        // 取得點擊的圖片路徑
        photoSrc = $(this).children('img')[0].src;
        console.log(photoSrc);

        // 顯示燈箱 UI
        $('.portfolio__lightbox').css({display: 'flex'});
    
        // 將燈箱中的圖片路徑換成我們存好的路徑
        $('.portfolio__lightbox > img').attr('src', photoSrc);
    
        // 鎖定 body 捲軸
        $('body').css({overflow: 'hidden'});
        
    });

/* 
* 燈箱關閉功能
*/

// 監聽我們要點擊的元素：燈箱右上角的叉叉
$('.portfolio__lightbox__close').click(function() {

    // 把自己隱藏起來
    $('.portfolio__lightbox').css({display: 'none'});

    // 開啟 body 捲軸
    $('body').css({position: 'relative', overflow: 'auto'});

});


})

