(function($) {
        $.beAjax = function(b) {
                var c = {
                        'id': null,
                        'ba': null,
                        'er': function() {
                                $('#tranBg').hide();
                                be.showalert('网络异常，请重试！')
                        },
                        'su': function(a) {
                                if (a != null && a.code == 0) {
                                        $('#tranBg').hide();
                                        d.ba(a)
                                } else {
                                        if (a != null && a.msg == 'Error...[-1]') {
                                                top.location.href = '/'
                                        } else {
                                                $('#tranBg').hide();
                                                be.showalert((a != null ? a.msg : '网络异常，请重试！'))
                                        }
                                }
                        }
                };
                var d = $.extend({}, c, b);
                $('#tranBg').show();
                $.ajax({
                        type: 'post',
                        dataType: 'json',
                        url: 'ajax.aspx',
                        data: (isNaN(d.id) ? d.id : {
                                id: d.id
                        }),
                        timeout: 10000,
                        error: d.er,
                        success: function(a) {
                                d.su(a)
                        }
                })
        }
})(jQuery);
var be = {
        isNumber: function(a) {
                return (/^[1-9]\d*$/).test(a)
        },
        isMobile: function(a) {
                return (/^0?1[3|4|5|7|8][0-9]\d{8}$/).test(a)
        },
        loadImgs: function(a) {
                $.each(a, function() {
                        $(this).removeClass('im').attr('src', $(this).attr('data-original')).unbind().one('load', function() {
                                $(this).unbind().fadeIn('slow').parent().removeClass('loadimg')
                        }).one('error', function() {
                                $(this).addClass('im')
                        })
                })
        },
        checkImgsBusy: false,
        checkImgs: function() {
                if (be.checkImgsBusy) return;
                be.checkImgsBusy = true;
                $.each($('img.im'), function() {
                        var a = $(this).parent().offset().top - $(document).scrollTop();
                        if (a > $('body').height()) return false;
                        if (a + $(this).parent().height()) be.loadImgs($(this))
                });
                be.checkImgsBusy = false
        },
        showpopTime: null,
        showpop: function(a, b) {
                clearTimeout(be.showpopTime);
                $('#prompt').show().find('div').html(a).css({
                        'top': (b == null ? '50%' : b)
                });
                be.showpopTime = setTimeout(function() {
                        $('#prompt').fadeOut()
                }, 1000)
        },
        showEmpty: function(a, b, c) {
                if (b == null) {
                        be.obj('#bodyDiv').removeClass().css('background-color', c == null ? '#f2f2f2' : c).html('<div class="empty"><div></div><div>' + a + '</div></div>')
                } else {
                        $(b).css('background-color', c == null ? '#f2f2f2' : c).append('<div class="empty"><div></div><div>' + a + '</div></div>')
                }
        },
        showalert: function(a, b, c) {
                $('#alert').show().find('s').html(a);
                if (b == null) {
                        $('#alert b').eq(1).unbind().click(function() {
                                $('#alert').hide()
                        })
                } else {
                        $('#alert b').eq(1).unbind().click(function() {
                                $('#alert').hide();
                                b()
                        })
                } if (c == null) {
                        $('#alert i').eq(0).hide()
                } else {
                        $('#alert i').eq(0).show();
                        if (c == 0) {
                                $('#alert b').eq(0).unbind().click(function() {
                                        $('#alert').hide()
                                })
                        } else {
                                $('#alert b').eq(0).unbind().click(function() {
                                        $('#alert').hide();
                                        c()
                                })
                        }
                }
        },
        strEnc: function(a) {
                a = a.replace(/\^/g, '^0');
                a = a.replace(/\&/g, '^1');
                a = a.replace(/\>/g, '^2');
                a = a.replace(/\</g, '^3');
                a = a.replace(/\"/g, '^4');
                a = a.replace(/\'/g, '^5');
                a = a.replace(/\ /g, '^6');
                a = a.replace(/\t/g, '^6');
                a = a.replace(/\%/g, '^7');
                a = a.replace(/\_/g, '^8');
                a = a.replace(/\;/g, '^9');
                a = a.replace(/\\/g, '^A');
                a = a.replace(/\|/g, '^B');
                return a
        },
        strDeH: function(a) {
                a = a.replace(/\^B/g, '|');
                a = a.replace(/\^A/g, '\\');
                a = a.replace(/\^9/g, ';');
                a = a.replace(/\^8/g, '_');
                a = a.replace(/\^7/g, '%');
                a = a.replace(/\^6/g, ' ');
                a = a.replace(/\^5/g, '&#39;');
                a = a.replace(/\^4/g, '&quot;');
                a = a.replace(/\^3/g, '&lt;');
                a = a.replace(/\^2/g, '&gt;');
                a = a.replace(/\^1/g, '&amp;');
                a = a.replace(/\^0/g, '^');
                return a
        },
        strDeT: function(a) {
                a = a.replace(/\^B/g, '\|');
                a = a.replace(/\^A/g, '\\');
                a = a.replace(/\^9/g, '\;');
                a = a.replace(/\^8/g, '\_');
                a = a.replace(/\^7/g, '\%');
                a = a.replace(/\^6/g, '\ ');
                a = a.replace(/\^5/g, '\'');
                a = a.replace(/\^4/g, '\"');
                a = a.replace(/\^3/g, '\<');
                a = a.replace(/\^2/g, '\>');
                a = a.replace(/\^1/g, '\&');
                a = a.replace(/\^0/g, '\^');
                return a
        },
        getBg: function(a) {
                return $(a).css("background-image").substr($(a).css("background-image").lastIndexOf('/') + 1).split('"')[0]
        },
        getSrc: function(a) {
                if ($(a).length == 0) return '';
                return $(a).attr('src').substr($(a).attr('src').lastIndexOf('/') + 1)
        },
        seLabels: function() {
                $('#header>div:last-child select').blur();
                $('#header>div:last-child ul').empty();
                $.each(hli[$('#header>div:last-child select').val()], function() {
                        $('#header>div:last-child ul').append('<li><a class=\"link\">' + be.strDeH(this[1]) + '</a></li>');
                        var a = this[0];
                        $('#header>div:last-child li>a.link').eq(-1).click(function() {
                                if ($('#header>div:last-child select').val() == 0) {
                                        top.location.href = 'WeChat.aspx?c=|' + a + '||||||||||||||'
                                } else {
                                        top.location.href = 'Other.aspx?c=' + ($('#header>div:last-child select').val() - 1) + '|' + a + '|||||||'
                                }
                        })
                })
        },
        init: function() {
                $('#header>div>div').eq(0).append('<p><s><a class="link">联系客服</a></s><s><a>服务热线：</a><i>' + fwrx + '</i></s></p>');
                $('#header>div>div').eq(1).append('<div><em><select><option value="0">微信公众号</option><option value="2">今日头条号</option><option value="3">百家号</option></select><input placeholder="输入您需求的关键词，如“订阅号”"><b></b></em><ul></ul></div><s><img src="./../theme/images/' + yqtp + '"></s>');
                $('#header_nav>div>em').append('<div id="header_menu"><div><div><p>微信公众号转让</p><ul></ul><div></div></div><div><p>粉丝定制</p><ul class="u"></ul></div><div><p>新媒体融资</p><ul class="u"><li><a class="link">创业者服务</a></li><li><a class="link">投资人服务</a></li></ul></div><div><p>其它帐号转让</p><ul><li><a class="link">今日头条</a></li><li><a class="link">百家号</a></li></ul><div></div></div><div><p>帐号估值</p><ul><li><a class="link">订阅号</a></li><li><a class="link">服务号</a></li></ul></div></div></div>推荐服务');
                $('body').append('<input type="file" id="uploadphoto" accept="image/png,image/jpeg,image/gif" style="display:none"><div id="alert"><div><s></s><p><i><b>取消</b></i><i><b>确定</b></i></p></div></div><div id="prompt"><div></div></div><div id="tranBg"><div><s></s></div></div>');
                $('#header>div:last-child>div>img').click(function() {
                        top.location.href = '/'
                });
                $('#header>div:first-child>div>p>s>a.link').click(function() {
                        window.open('http://wpa.qq.com/msgrd?v=3&uin=' + kfqq + '&site=qq&menu=yes')
                });
                $('#header>div:last-child s').click(function() {
                        top.location.href = be.strDeT(yqlj)
                });
                $('#header>div:last-child b').click(function() {
                        var a = $('#header>div:last-child select').val();
                        var b = $.trim($('#header>div:last-child input').val());
                        if (a == 0) {
                                top.location.href = 'WeChat.aspx' + (b.length > 0 ? '?s=' + encodeURIComponent(b) : '')
                        } else {
                                top.location.href = 'Other.aspx?c=' + (a - 1) + '||||||||' + (b.length > 0 ? '&s=' + encodeURIComponent(b) : '')
                        }
                });
                be.seLabels();
                $('#header>div:last-child select').change(function() {
                        be.seLabels()
                });
                $('#header_nav>div>s').click(function() {
                        top.location.href = '/Sell.aspx'
                });
                $.each(tj1, function() {
                        $('#header_menu>div>div>ul').eq(0).append('<li><a class="link">' + be.strDeH(this[1]) + '</a></li>');
                        var a = this[0];
                        $('#header_menu>div>div>ul').eq(0).find('a.link').eq(-1).click(function() {
                                top.location.href = 'WeChat.aspx?c=|' + a + '||||||||||||||'
                        })
                });
                $.each(tj2, function() {
                        $('#header_menu>div>div>ul').eq(1).append('<li><a class="link">' + be.strDeH(this[1]) + '</a></li>');
                        var a = this[0];
                        $('#header_menu>div>div>ul').eq(1).find('a.link').eq(-1).click(function() {
                                top.location.href = '/FansDetail.aspx?id=' + a
                        })
                });
                $('#header_menu>div>div:nth-child(3) a.link').eq(0).click(function() {
                        top.location.href = '/Finance.aspx?1'
                });
                $('#header_menu>div>div:nth-child(3) a.link').eq(1).click(function() {
                        top.location.href = '/Finance.aspx'
                });
                $('#header_menu>div>div:nth-child(4) a.link').eq(0).click(function() {
                        top.location.href = 'Other.aspx?c=0||||||||'
                });
                $('#header_menu>div>div:nth-child(4) a.link').eq(1).click(function() {
                        top.location.href = 'Other.aspx?c=1||||||||'
                });
                $('#header_menu>div>div:nth-child(5) a.link').eq(0).click(function() {
                        top.location.href = '/Valuation.aspx'
                });
                $('#header_menu>div>div:nth-child(5) a.link').eq(1).click(function() {
                        top.location.href = '/Valuation.aspx?1'
                });
                $('#header_menu>div>div:first-child>div').append('<p><s>公众号类型：</s><em><a class="u">全部</a><a class="link">订阅号</a><a class="link">服务号</a></em></p>' + '<p><s>公众号类目：</s><em><a class="u">全部</a></em></p>' + '<p><s>价格区间：</s><em><a class="u">不限</a><a class="link">1万以内</a><a class="link">1-5万</a><a class="link">5-10万</a><a class="link">10-15万</a><a class="link">15-20万</a><a class="link">20-25万</a><a class="link">25-30万</a><a class="link">30万以上</a></em></p>' + '<p><s>粉丝数量：</s><em><a class="u">不限</a><a class="link">1万以内</a><a class="link">1-5万</a><a class="link">5-10万</a><a class="link">10-15万</a><a class="link">15-20万</a><a class="link">20-25万</a><a class="link">25-30万</a><a class="link">30万以上</a></em></p>' + '<p><s>认证类型：</s><em><a class="u">不限</a><a class="link">未认证</a><a class="link">已认证</a></em></p>');
                $.each(labels_wx, function() {
                        $('#header_menu>div>div:nth-child(1)>div>p:nth-child(2)>em').append('<a id="wx_' + this[0] + '" class="link">' + be.strDeH(this[1]) + '</a>')
                });
                $('#header_menu>div>div:nth-child(1)>div>p>em>a.u').click(function() {
                        top.location.href = '/WeChat.aspx'
                });
                $('#header_menu>div>div:nth-child(1)>div>p:nth-child(1)>em>a.link').click(function() {
                        top.location.href = '/WeChat.aspx?c=' + $('#header_menu>div>div:nth-child(1)>div>p:nth-child(1)>em>a.link').index(this) + '|||||||||||||||'
                });
                $('#header_menu>div>div:nth-child(1)>div>p:nth-child(2)>em>a.link').click(function() {
                        top.location.href = '/WeChat.aspx?c=|' + $(this).attr('id').split('_')[1] + '||||||||||||||'
                });
                $('#header_menu>div>div:nth-child(1)>div>p:nth-child(3)>em>a.link').click(function() {
                        top.location.href = '/WeChat.aspx?c=||' + $('#header_menu>div>div:nth-child(1)>div>p:nth-child(3)>em>a.link').index(this) + '|||||||||||||'
                });
                $('#header_menu>div>div:nth-child(1)>div>p:nth-child(4)>em>a.link').click(function() {
                        top.location.href = '/WeChat.aspx?c=|||||' + $('#header_menu>div>div:nth-child(1)>div>p:nth-child(4)>em>a.link').index(this) + '||||||||||'
                });
                $('#header_menu>div>div:nth-child(1)>div>p:nth-child(5)>em>a.link').click(function() {
                        top.location.href = '/WeChat.aspx?c=||||||||' + $('#header_menu>div>div:nth-child(1)>div>p:nth-child(5)>em>a.link').index(this) + '|||||||'
                });
                $('#header_menu>div>div:nth-child(4)>div').append('<p><s>帐号类型：</s><em><a class="u">全部</a><a class="link">今日头条</a><a class="link">百家号</a></em></p>' + '<p><s>账号类目：</s><em><a class="u">全部</a></em></p>' + '<p><s>价格区间：</s><em><a class="u">不限</a><a class="link">1万以内</a><a class="link">1-5万</a><a class="link">5-10万</a><a class="link">10-15万</a><a class="link">15-20万</a><a class="link">20-25万</a><a class="link">25-30万</a><a class="link">30万以上</a></em></p>' + '<p><s>粉丝数量：</s><em><a class="u">不限</a><a class="link">1万以内</a><a class="link">1-5万</a><a class="link">5-10万</a><a class="link">10-15万</a><a class="link">15-20万</a><a class="link">20-25万</a><a class="link">25-30万</a><a class="link">30万以上</a></em></p>' + '<p><s>认证类型：</s><em><a class="u">不限</a><a class="link">个人认证</a><a class="link">企业认证</a></em></p>');
                $.each(labels_qt, function() {
                        $('#header_menu>div>div:nth-child(4)>div>p:nth-child(2)>em').append('<a id="qt_' + this[0] + '" class="link">' + be.strDeH(this[1]) + '</a>')
                });
                $('#header_menu>div>div:nth-child(4)>div>p>em>a.u').click(function() {
                        top.location.href = '/Other.aspx'
                });
                $('#header_menu>div>div:nth-child(4)>div>p:nth-child(1)>em>a.link').click(function() {
                        top.location.href = '/Other.aspx?c=' + $('#header_menu>div>div:nth-child(2)>div>p:nth-child(1)>em>a.link').index(this) + '||||||||'
                });
                $('#header_menu>div>div:nth-child(4)>div>p:nth-child(2)>em>a.link').click(function() {
                        top.location.href = '/Other.aspx?c=|' + $(this).attr('id').split('_')[1] + '|||||||'
                });
                $('#header_menu>div>div:nth-child(4)>div>p:nth-child(3)>em>a.link').click(function() {
                        top.location.href = '/Other.aspx?c=||' + $('#header_menu>div>div:nth-child(2)>div>p:nth-child(3)>em>a.link').index(this) + '||||||'
                });
                $('#header_menu>div>div:nth-child(4)>div>p:nth-child(4)>em>a.link').click(function() {
                        top.location.href = '/Other.aspx?c=|||||' + $('#header_menu>div>div:nth-child(2)>div>p:nth-child(4)>em>a.link').index(this) + '|||'
                });
                $('#header_menu>div>div:nth-child(4)>div>p:nth-child(5)>em>a.link').click(function() {
                        top.location.href = '/Other.aspx?c=||||||||' + $('#header_menu>div>div:nth-child(2)>div>p:nth-child(5)>em>a.link').index(this)
                });
                $('#footer>div>em>i>a').click(function() {
                        if ($(this).next().next().val().length > 0) {
                                if ($(this).next().val() == 0) {
                                        window.open(be.strDeT($(this).next().next().val()))
                                } else if ($(this).next().val() == 1) {
                                        top.location.href = be.strDeT($(this).next().next().val())
                                } else {
                                        window.open('http://wpa.qq.com/msgrd?v=3&uin=' + be.strDeT($(this).next().next().val()) + '&site=qq&menu=yes')
                                }
                        }
                });
                $('#header_menu>div>div:nth-child(2),#header_menu>div>div:nth-child(3)').remove();
                $('#header_menu>div').append('<div style="padding:1px;text-align:center"><img src="./../theme/images/j3bujb55.jpg" style="width:173px"></div>');
                $('body').append('<div id="online"><s></s><div><s></s><div><ul></ul></div></div></div>');
                $.each(online, function() {
                        $('#online>div>div>ul').append('<li>' + be.strDeH(this[0]) + '</li>');
                        var a = be.strDeT(this[1]);
                        $('#online>div>div>ul>li').eq(-1).click(function() {
                                window.open('http://wpa.qq.com/msgrd?v=3&uin=' + a + '&site=qq&menu=yes')
                        })
                });
                $('#online').css('height', 172 + 46 * $('#online>div>div>ul>li').length);
                $('#online>s').click(function() {
                        $('#online>s').hide();
                        $('#online>div').show();
                        $('#online').animate({
                                right: 0
                        })
                });
                $('#online>div>s').click(function() {
                        $('#online').animate({
                                right: "-120px"
                        }, function() {
                                $('#online>div').hide();
                                $('#online>s').show()
                        })
                });
                setTimeout(function() {
                        be.checkImgs()
                }, 500)
        }
};
var _hmt = _hmt || [];
(function() {
        var a = document.createElement("script");
        a.src = "https://hm.baidu.com/hm.js?366e42085e1cdb8d2070f64c41990a20";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(a, s)
})();