var be = {
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
        }
};

$(function () {
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
});