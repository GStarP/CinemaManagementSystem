const ticketState = {'0': '未支付', '1': '已完成', '2': '已失效'};

$(document).ready(function () {
    getMovieList();

    function getMovieList() {
        getRequest(
            '/ticket/get/' + sessionStorage.getItem('id'),
            function (res) {
                renderTicketList(res.content);
            },
            function (error) {
                alert(error);
            });
    }

    /**
     * @Date:   2019-5-5
     * @Author: hxw
     * @Info:   渲染购票记录
     */
    function renderTicketList(list) {
        var ticketListContent = '';
        for (let ticket of list) {
            ticketListContent +=
                '<tr>' +
                '<td>' + ticket.movieName + '</td>' +
                '<td>' + ticket.hallName + '</td>' +
                '<td>' + (ticket.rowIndex + 1) + '排' + (ticket.columnIndex + 1) + '座' + '</td>' +
                '<td>' + formateTime(ticket.startTime) + '</td>' +
                '<td>' + formateTime(ticket.endTime) + '</td>' +
                '<td>' + formateTime(ticket.time) + '</td>' +
                '<td>' + ticketState[ticket.state] + '</td>' +
                '</tr>'
            ;
        }
        $('#ticket-list').html(ticketListContent);
    }

    /**
     * @Date:   2019-5-5
     * @Author: hxw
     * @Info:   格式化时间
     */
    function formateTime(time) {
        var res = '';
        var date = time.split('T')[0];
        var hms = time.split('T')[1].split('.')[0];
        res = res + date + ' ' + hms;
        return res;
    }

});