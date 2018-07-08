$(document).ready(function () {
        be.init();
        $('#location>a').eq(0).html(sna).click(function () {
                top.location.href = '/'
        });
        $('#location>a').eq(1).click(function () {
                top.location.href = '/Services.aspx'
        });
        $('#location>a').eq(2).click(function () {
                top.location.href = '/Services.aspx?id=' + sid
        });
        $('#detail>u>i:nth-child(1)').click(function () {
                window.open('http://service.weibo.com/share/share.php?url=' + encodeURIComponent(document.URL) + '&title=' + encodeURIComponent(document.querySelector('meta[name="description"]').getAttribute('content')) + '&pic=http://www.wanyiyun.com/images/' + servicePic + '&appkey=&searchPic=false')
        });
        $('#detail>u>i:nth-child(2)').click(function () {
                be.showalert('<a style="font-weight:700">分享到微信</a><br><img style="margin:-12px 0 16px 0" src="shareWeChat.aspx?t=2&i=' + document.URL.split('=')[1] + '">')
        });
        $('#detail>u>i:nth-child(3)').click(function () {
                window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodeURIComponent(document.URL) + '&title=' + encodeURIComponent(document.title) + '&pics=http://www.wanyiyun.com/images/' + servicePic + '&summary=' + encodeURIComponent(document.querySelector('meta[name="description"]').getAttribute('content')) + '&desc=' + encodeURIComponent(document.querySelector('meta[name="description"]').getAttribute('content')) + '')
        });
        $('#detail>u>i:nth-child(4)').click(function () {
                window.open('http://share.v.t.qq.com/index.php?c=share&a=index&title=' + encodeURIComponent(document.querySelector('meta[name="description"]').getAttribute('content')) + '&url=' + encodeURIComponent(document.URL) + '&appkey=ce15e084124446b9a612a5c29f82f080&site=www.jiathis.com&pic=' + encodeURIComponent('http://www.wanyiyun.com/images/' + servicePic) + '')
        });
        be.checkImgs();
        $(document).scroll(function () {
                be.checkImgs()
        })
});