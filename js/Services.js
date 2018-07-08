$(document).ready(function () {
        be.init();
        $('#location>a').eq(0).html(sna).click(function () {
                top.location.href = '/'
        });
        $('#service_' + nid).attr('class', 'u');
        $('#services>em>s').click(function () {
                top.location.href = '/Services.aspx?id=' + $(this).attr('id').split('_')[1]
        });
        $('#services>ul>li').click(function () {
                top.location.href = '/ServiceDetail.aspx?id=' + $(this).attr('id').split('_')[1]
        });
        $('#pagination a').text(num);
        $.each(pages, function () {
                $('#pagination ul').append('<li class="' + (this[0] == 0 ? 'd' : (this[0] == 1 ? 'n' : 'm')) + '">' + ((this[0] == 2 ? '...' : this[1])) + '</li>')
        });
        $('#pagination li.d').click(function () {
                top.location.href = '/Services.aspx?id=' + nid + '&pa=' + $(this).text()
        });
        be.checkImgs();
        $(document).scroll(function () {
                be.checkImgs()
        })
});