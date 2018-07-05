var focusImgs = {
        le: 0,
        sc: null,
        si: null,
        sw: function () {
                focusImgs.si = setTimeout(function () {
                        if ((focusImgs.sc.currentPage.pageX + 1) == focusImgs.le) {
                                focusImgs.sc.goToPage(0, 0)
                        } else {
                                focusImgs.sc.next()
                        }
                }, 3000)
        },
        st: function (a) {
                be.loadImgs($('#focusImgs img'));
                focusImgs.le = a;
                focusImgs.sc = new IScroll('#focusImgs', {
                        preventDefault: false,
                        scrollX: true,
                        scrollY: false,
                        momentum: false,
                        snap: true,
                        disableMouse: true,
                        disablePointer: true,
                        indicators: {
                                el: '#focusImgs div',
                                resize: false
                        }
                });
                focusImgs.sc.on('scrollEnd', function () {
                        clearTimeout(focusImgs.si);
                        focusImgs.sw()
                });
                $('#focusImgs u').click(function () {
                        clearTimeout(focusImgs.si);
                        if (focusImgs.sc.currentPage.pageX == 0) {
                                focusImgs.sc.goToPage(focusImgs.le, 0)
                        } else {
                                focusImgs.sc.prev()
                        }
                        focusImgs.sw()
                });
                $('#focusImgs i').click(function () {
                        clearTimeout(focusImgs.si);
                        if ((focusImgs.sc.currentPage.pageX + 1) == focusImgs.le) {
                                focusImgs.sc.goToPage(0, 0)
                        } else {
                                focusImgs.sc.next()
                        }
                        focusImgs.sw()
                });
                focusImgs.sc.refresh();
                focusImgs.sw()
        }
};
$(document).ready(function () {
        be.init();
        $.each(focus, function () {
                $('#focusImgs>ul').append('<li class="loadimg"><img class="im" data-original="/images/' + this[0] + '"></li>');
                if (this[3] != '') {
                        var a = be.strDeT(this[3]);
                        if (this[2] == 0) {
                                $('#focusImgs>ul>li').eq(-1).click(function () {
                                        window.open(a)
                                })
                        } else {
                                $('#focusImgs>ul>li').eq(-1).click(function () {
                                        top.location.href = be.strDeT(a)
                                })
                        }
                }
        });
        $('#focusImgs div').css('width', $('#focusImgs li').length * 24 - 12);
        focusImgs.st($('#focusImgs li').length);
        $('em.link').click(function () {
                top.location.href = '/MediaDetail.aspx?id=' + $(this).attr('id').split('_')[1]
        });
        $('#wechat>ul>li:first-child>em>a').eq(0).text('订阅号');
        $('#wechat>ul>li:first-child>em>a').eq(1).text('服务号');
        $('#wechat>ul>li:first-child>s>a').click(function () {
                top.location.href = '/Sell.aspx'
        });
        $('#wechat>ul>li:first-child>a').click(function () {
                top.location.href = '/WeChat.aspx'
        });
        $('#made_fans a.link').click(function () {
                top.location.href = '/Fans.aspx'
        });
        $('#finance>em>a').eq(0).click(function () {
                top.location.href = '/Finance.aspx?1'
        });
        $('#finance>em>a').eq(1).click(function () {
                top.location.href = '/Finance.aspx'
        });
        $('#others>ul>li:first-child>u>a').click(function () {
                top.location.href = '/Other.aspx'
        });
        $('#news>div>ul>li').click(function () {
                top.location.href = '/ServiceDetail.aspx?id=' + $(this).attr('id').split('_')[1]
        });
        $('#news>div>ul>em').click(function () {
                top.location.href = '/Services.aspx?id=' + $(this).attr('id').split('_')[1]
        });
        $('#news>ul>li').click(function () {
                $(this).attr('class', 'u').siblings().removeClass();
                $('#news>div>ul').eq($('#news>ul>li').index(this)).attr('class', 'u').siblings().removeClass()
        });
        $('#news>ul>li:nth-child(1),#news>div>ul:nth-child(1)').attr('class', 'u');
        be.checkImgs();
        $(document).scroll(function () {
                be.checkImgs()
        });
        setTimeout(function () {
                focusImgs.sc.refresh()
        }, 500)
});