let $size_wrap = $('#js-size-wrap');

$(window).on('resize', function(){
    showSize();
});


function showSize() {
    $size_wrap.html( `
        螢幕解析度的寬 window.screen.width: ${window.screen.width} <br>
        螢幕解析度的高 window.screen.height: ${window.screen.height} <br>
        <br>
        螢幕可用工作區寬度 window.screen.availWidth: ${window.screen.availWidth} <br>
        螢幕可用工作區高度 window.screen.availHeight: ${window.screen.availHeight} <br>
        <br>
        網頁可見區域寬(扣掉捲軸寬度) document.body.clientWidth: ${document.body.clientWidth} <br>
        網頁可見區域高(扣掉捲軸高度) document.body.clientHeight: ${document.body.clientHeight} <br>
        <br>
        網頁正文全文寬(不扣掉捲軸寬度) document.body.scrollWidth: ${document.body.scrollWidth} <br>
        網頁正文全文高(不扣掉捲軸高度) document.body.scrollHeight: ${document.body.scrollHeight} <br>
        <br>
        網頁可見區域寬(包括 border) document.body.offsetWidth: ${document.body.offsetWidth} <br>
        網頁可見區域高(包括 border) document.body.offsetHeight: ${document.body.offsetHeight} <br><br>

        盒子寬度 ${$size_wrap.width()} <br>
        盒子高度 ${$size_wrap.height()}<br><br>
    `);
}

/* init */
showSize();