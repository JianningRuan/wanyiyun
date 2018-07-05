$(document).ready(function () {
        be.init();
        $('#valuation>div>div>div>ul>li').click(function () {
                $(this).attr('class', 'u').siblings().removeClass();
                if ($('#valuation>div>div>div>ul>li').index(this) == 0) {
                        $('#valuation>div>div>div>div>em').show();
                        $('#valuation>div>div>div>div>em:nth-child(2)>s').text('公众号ID：');
                        $('#valuation>div>div>div>div>em:nth-child(2)>i>input').attr('placeholder', '请填写公众号ID')
                } else {
                        $('#valuation>div>div>div>div>em:nth-child(1),#valuation>div>div>div>div>em:nth-child(8),#valuation>div>div>div>div>em:nth-child(9)').hide();
                        $('#valuation>div>div>div>div>em:nth-child(2)>s').text('帐号ID：');
                        $('#valuation>div>div>div>div>em:nth-child(2)>i>input').attr('placeholder', '请填写帐号ID')
                }
        });
        $('#valuation>div>div>div>div>em>i>u:first-child').attr('class', 'u');
        $('#valuation>div>div>div>div>em>i>u').click(function () {
                $(this).attr('class', 'u').siblings().removeClass()
        });
        if (top.location.href.slice(-1) == '1') $('#valuation>div>div>div>div>em:first-child>i>u:last-child').attr('class', 'u').siblings().removeClass();
        $('#valuation>div>div>div>div>em>i>s').click(function () {
                if ($(this).text() != '发送验证码') return;
                var b = $.trim($('#valuation>div>div>div>div>em>i>input.mb').val());
                if (b.length < 1) {
                        be.showalert('请填写您的手机号码');
                        return
                }
                if (!be.isMobile(b)) {
                        be.showalert('您填写的手机号码不正确');
                        return
                }
                $.beAjax({
                        id: {
                                id: 1,
                                tel: b
                        },
                        ba: function (a) {
                                if (a.msg != null) {
                                        be.showalert(a.msg)
                                } else {
                                        valuation.countdown(a.ti)
                                }
                        }
                })
        });
        $('#valuation>div>div>div>b').click(function () {
                var b = $('#valuation>div>div>div>ul>li').index($('#valuation>div>div>div>ul>li.u'));
                var c = $('#valuation>div>div>div>div>em:nth-child(1)>i>u').index($('#valuation>div>div>div>div>em:nth-child(1)>i>u.u'));
                var d = $.trim($('#valuation>div>div>div>div>em>i>input').eq(0).val());
                if (d.length < 1) {
                        be.showalert('请填写' + (b == 0 ? '公众' : '帐') + '号ID');
                        return
                }
                var e = $.trim($('#valuation>div>div>div>div>em>i>input').eq(1).val());
                if (e.length < 1) {
                        be.showalert('请填写所属行业');
                        return
                }
                var f = $.trim($('#valuation>div>div>div>div>em>i>input').eq(2).val());
                if (f.length < 1) {
                        be.showalert('请填写粉丝数量');
                        return
                }
                var g = $.trim($('#valuation>div>div>div>div>em>i>b>input').eq(0).val());
                if (g.length < 1) {
                        be.showalert('请填写男粉比例');
                        return
                }
                var h = $.trim($('#valuation>div>div>div>div>em>i>b>input').eq(1).val());
                if (h.length < 1) {
                        be.showalert('请填写女粉比例');
                        return
                }
                var i = $('#valuation>div>div>div>div>em:nth-child(6)>i>u').index($('#valuation>div>div>div>div>em:nth-child(6)>i>u.u'));
                var j = $('#valuation>div>div>div>div>em:nth-child(7)>i>u').index($('#valuation>div>div>div>div>em:nth-child(7)>i>u.u'));
                var k = $('#valuation>div>div>div>div>em:nth-child(8)>i>u').index($('#valuation>div>div>div>div>em:nth-child(8)>i>u.u'));
                var l = $.trim($('#valuation>div>div>div>div>em>i>input').eq(3).val());
                if (b == 0 && l.length < 1) {
                        be.showalert('请填写流量主月收入');
                        return
                }
                var m = $.trim($('#valuation>div>div>div>div>em>i>input').eq(4).val());
                if (m.length < 1) {
                        be.showalert('请填写广告月收入');
                        return
                }
                var n = $.trim($('#valuation>div>div>div>div>em>i>input').eq(5).val());
                if (n.length < 1) {
                        be.showalert('请填写头条阅读人数');
                        return
                }
                var o = $.trim($('#valuation>div>div>div>div>em>i>input.mb').val());
                if (o.length < 1) {
                        be.showalert('请填写您的手机号码');
                        return
                }
                if (!be.isMobile(o)) {
                        be.showalert('您填写的手机号码不正确');
                        return
                }
                var p = $.trim($('#valuation>div>div>div>div>em>i>input.co').val());
                if (p.length < 1) {
                        be.showalert('请填写您的短信验证码');
                        return
                }
                var q = $.trim($('#valuation>div>div>div>div>em>i>input').eq(8).val());
                if (q.length < 1) {
                        be.showalert('请填写您的QQ号');
                        return
                }
                $.beAjax({
                        id: {
                                id: 4,
                                ty: b,
                                tl: c,
                                si: d,
                                hy: e,
                                fs: f,
                                fb: g,
                                fg: h,
                                zx: i,
                                zb: j,
                                yc: k,
                                ll: l,
                                gg: m,
                                yd: n,
                                mb: o,
                                co: p,
                                qq: q
                        },
                        ba: function (a) {
                                $('#valuation>div>div>div>div>em>i>input.co').val('');
                                if (a.msg != null) {
                                        be.showalert(a.msg)
                                } else {
                                        $('#valuation>div>div>div>ul>li::first-child').attr('class', 'u').siblings().removeClass();
                                        $('#valuation>div>div>div>div>em>i>u:first-child').attr('class', 'u').siblings().removeClass();
                                        $('#valuation>div>div>div>div>em>i>input,#valuation>div>div>div>div>em>i>b>input').val('');
                                        be.showalert('资料提交成功<u style="color:#151516">我们的工作人员会尽快联系您</u><u style="color:#151516">估值结果将会在48小时之内给您反馈</u>')
                                }
                        }
                })
        });
        be.checkImgs();
        $(document).scroll(function () {
                be.checkImgs()
        })
});
var valuation = {
        countdown: function (a) {
                if (a < 2) {
                        $('#valuation>div>div>div>div>em>i>s').attr('class', 'u').text('发送验证码');
                        return
                }
                $('#valuation>div>div>div>div>em>i>s').removeClass().text('重新发送(' + (a - 1) + ')');
                setTimeout(function () {
                        valuation.countdown(a - 1)
                }, 1000)
        }
}