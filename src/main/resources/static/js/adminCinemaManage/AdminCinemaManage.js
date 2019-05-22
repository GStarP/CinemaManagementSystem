$(document).ready(function () {
    mount(new AdminCinemaManage({}), document.querySelector("#hall-manage-wrapper"))
});

class AdminCinemaManage extends Component {
    constructor(props) {
        super(props);
        // viewTab =>  0:查看    1:添加    2:修改    3:删除
        this.state = {
            viewTab: 0,
            halls: []
        };
        this.getCinemaHalls();
    }

    getCinemaHalls() {
        getRequest(
            '/hall/all',
            (res) => this.setState({halls: res.content}),
            error => alert(JSON.stringify(error))
        );
    }

    onViewChange(viewType) {
        this.setState(this.setState({
            viewTab: viewType
        }));
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
        mount(new CanSeeDay({}), this.canSeeDayWrapper);
        mount(new HallManageNavi({
            activeView: 0,
            onViewChange: (viewType) => this.onViewChange(viewType)
        }), this.hallManageNaviWrapper);

        switch (this.state.viewTab) {
            case 0:
                mount(new ViewHall({halls: this.state.halls}), this.hallWrapper);
                break;
            case 1:
                mount(new AddHall({}), this.hallWrapper);
                break;
            case 2:
                mount(new ModifyHall({}), this.hallWrapper);
                break;
            case 3:
                mount(new RemoveHall({}), this.hallWrapper);
                break;
        }

        return this.el;
    }
}