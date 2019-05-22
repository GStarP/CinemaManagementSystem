class HallManageNavi extends Component{
    constructor(props) {
        super(props);

    }

    renderDOM() {
        const activeView = this.props.activeView;
        const el_html = `
            <div class="hall-manage-navi">
                <div class="hall-manage-navi-view">查看</div>
                <div class="hall-manage-navi-add">添加</div>
                <div class="hall-manage-navi-modify">修改</div>
                <div class="hall-manage-navi-delete">删除</div>
            </div>
        `;
        this.el = createDOMFromString(el_html);
        return this.el;
    }

}