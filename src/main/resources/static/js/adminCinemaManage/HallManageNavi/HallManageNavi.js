class HallManageNavi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewType: this.props.activeView
        };
    }

    // navi-view的点击事件
    onViewClick() {
        this.setState({
            viewType: 0
        });
        this.props.onViewChange(0);
    }

    // navi-add的点击事件
    onAddClick() {
        this.setState({
            viewType: 1
        });
        this.props.onViewChange(1);
    }

    // navi-modify的点击事件
    onModifyClick() {
        this.setState({
            viewType: 2
        });
        this.props.onViewChange(2);
    }

    // navi-delete的点击事件
    onDeleteClick() {
        this.setState({
            viewType: 3
        });
        this.props.onViewChange(3);
    }


    renderDOM() {
        // 当前被点中的tab
        const activeView = this.state.viewType;
        const el_html = `
            <div class="hall-manage-navi">
                <div class="hall-manage-navi-item" id="hall-manage-navi-view">查看</div>
                <div class="hall-manage-navi-item" id="hall-manage-navi-add">添加</div>
                <div class="hall-manage-navi-item" id="hall-manage-navi-modify">修改</div>
                <div class="hall-manage-navi-item" id="hall-manage-navi-delete">删除</div>
            </div>
        `;
        this.el = createDOMFromString(el_html);
        this.naviView = this.el.querySelector('#hall-manage-navi-view');
        this.naviAdd = this.el.querySelector('#hall-manage-navi-add');
        this.naviModify = this.el.querySelector('#hall-manage-navi-modify');
        this.naviDelete = this.el.querySelector('#hall-manage-navi-delete');
        this.naviView.addEventListener('click', () => this.onViewClick());
        this.naviAdd.addEventListener('click', () => this.onAddClick());
        this.naviModify.addEventListener('click', () => this.onModifyClick());
        this.naviDelete.addEventListener('click', () => this.onDeleteClick());

        return this.el;
    }

}