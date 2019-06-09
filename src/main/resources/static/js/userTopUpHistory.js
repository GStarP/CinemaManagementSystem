$(document).ready(function () {
    mount(new UserHeader({active: 1}), document.querySelector("#nav-top-container"));

    getTopUpHistoryList();

});

function getTopUpHistoryList() {
    getRequest(
      '/history/topup/get?userId='+sessionStorage.getItem('id'),
      function (res) {
          if (res.success) {
              renderTopUpHistory(res.content);
          } else {
              alert(res.message);
          }
      },
      function (error) {
          alert(JSON.stringify(error));
      }
    );
}

/**
 * 渲染充值记录列表
 * @author hxw
 * @date 2019-5-21
 * @param histories
 */
function renderTopUpHistory(histories) {
    if (!histories || histories.length == 0) {
        $('#no-his-caption').attr("style","visibility: visible");
        return;
    }
    var accordionContent = '';
    for (let his of histories) {
        accordionContent += getPanelHTML(his);
    }
    $('#accordion').html(accordionContent);
}

/**
 * 获取充值记录子项HTML代码
 * @author hxw
 * @date 2019-5-21
 * @param his
 * @return
 */
function getPanelHTML(his) {
    return "<div class='panel panel-default'>" +
             "<div class='panel-heading'>" +
               "<h4 class='panel-title'>" +
                 "<a class='content-wrapper' data-toggle='collapse' data-parent='#accordion' href='#collapse"+his.id+"'>" +
                   "<div class='txt-one'><b>充值金额</b> : "+his.money+"</div><div class='txt-two'><b>充值时间</b> : "+formateTime(his.time) + "</div>" +
                 "</a>" +
               "</h4>" +
             "</div>" +
             "<div class='panel-collapse collapse' id='collapse"+his.id+"'>" +
               "<div class='panel-body content-wrapper'>" +
                 "<div class='txt-one'><b>优惠金额</b> : "+his.discount+"</div><div class='txt-two'><b>会员卡余额</b> : "+his.balance + "</div>" +
               "</div>" +
             "</div>" +
           "</div>";
}

function formateTime(time) {
    var res = '';
    var date = time.split('T')[0];
    var hms = time.split('T')[1].split('.')[0];
    res = res + date + ' ' + hms;
    return res;
}