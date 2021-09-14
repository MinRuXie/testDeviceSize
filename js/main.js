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
        瀏覽器寬度 window.outerWidth: ${window.outerWidth} <br>
        瀏覽器高度 window.outerHeight: ${window.outerHeight} <br>
        <br>
        頁面內文寬度 window.innerWidth: ${window.innerWidth} <br>
        頁面內文高度 window.innerHeight: ${window.innerHeight} <br>
        <br>
        <br>
        網頁可見區域寬 document.body.clientWidth: ${document.body.clientWidth} <br>
        網頁可見區域高 document.body.clientHeight: ${document.body.clientHeight} <br>
        <br>
        網頁正文全文寬 document.body.scrollWidth: ${document.body.scrollWidth} <br>
        網頁正文全文高 document.body.scrollHeight: ${document.body.scrollHeight} <br>
        <br>
        網頁可見區域寬 document.body.offsetWidth: ${document.body.offsetWidth} <br>
        網頁可見區域高 document.body.offsetHeight: ${document.body.offsetHeight} <br><br>
        <br>
        盒子可見區域寬 .clientWidth: ${document.getElementById('js-size-wrap').clientWidth} <br>
        盒子可見區域高 .clientHeight: ${document.getElementById('js-size-wrap').clientHeight} <br>
        <br>
        盒子正文全文寬 .scrollWidth: ${document.getElementById('js-size-wrap').scrollWidth} <br>
        盒子正文全文高 .scrollHeight: ${document.getElementById('js-size-wrap').scrollHeight} <br>
        <br>
        盒子可見區域寬 .offsetWidth: ${document.getElementById('js-size-wrap').offsetWidth} <br>
        盒子可見區域高 .offsetHeight: ${document.getElementById('js-size-wrap').offsetHeight} <br>
        <br>
        盒子寬度 ${$size_wrap.width()} <br>
        盒子高度 ${$size_wrap.height()}<br><br>
    `);
}

/* init */
showSize();