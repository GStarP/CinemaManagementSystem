$(document).ready(function () {
    mount(new AdminCinemaManage({}), document.querySelector("#hall-manage-wrapper"))
});

class AdminCinemaManage extends Component {
    constructor(props) {
        super(props);

    }

    renderDOM() {
        const el_html = `
            <div class="content-item">
                <span class="title gray-text">常规设置</span>
                <div class="content-card card" id="can-see-day-wrapper"></div>
            </div>
            <div class="content-item">
                <span class="title gray-text">影厅管理</span>
                <div id="hall-manage-navi-wrapper"></div>
                <div class="content-card card" id="hall-card">
                </div>
            </div>
        `;
        this.el = createDOMFromString(el_html);

        this.hallWrapper = this.el.querySelector("#hall-card");
        this.canSeeDayWrapper = this.el.querySelector("#can-see-day-wrapper");
        this.hallManageNaviWrapper = this.el.querySelector("#hall-manage-navi-wrapper");
        mount(new ViewHall({}), this.hallWrapper);
        mount(new CanSeeDay({}), this.canSeeDayWrapper);
        mount(new HallManageNavi({activeView: 0}), this.hallManageNaviWrapper);

        return this.el;
    }
}