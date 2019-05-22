class CanSeeDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canSeeDate: 0
        };
        this.getCanSeeDayNum();
    }

    getCanSeeDayNum() {
        getRequest(
            '/schedule/view',
            (res) => {
                this.setState({canSeeDate: res.content});
            },
            error => {
                alert(JSON.stringify(error));
            }
        );
    }

    onModifyCanViewClick() {
        $("#canview-modify-btn").hide();
        $("#canview-set-input").val(this.state.canSeeDate);
        $("#canview-set-input").show();
        $("#canview-confirm-btn").show();
    }

    onCanViewConfirmClick() {
        const dayNum = $("#canview-set-input").val();
        // 验证一下是否为数字
        postRequest(
            '/schedule/view/set',
            {day: dayNum},
            (res) => {
                if (res.success) {
                    this.getCanSeeDayNum();
                    $("#canview-modify-btn").show();
                    $("#canview-set-input").hide();
                    $("#canview-confirm-btn").hide();
                } else {
                    alert(res.message);
                }
            },
            error => {
                alert(JSON.stringify(error));
            }
        );
    }

    renderDOM() {
        const el_html =  `<span class="">用户可见排片日期：  ${this.state.canSeeDate} </span> 
            <button style="margin-left: 20px;" class="primary-text" id="canview-modify-btn">修改</button> 
            <input type="number" class="form-control" id="canview-set-input" style="display: none;width: 200px;">
            <button style="display: none" class="primary-text" id="canview-confirm-btn">确认</button>
        `;
        this.el = createDOMFromString(el_html);
        this.modifyButton = this.el.querySelector("#canview-modify-btn");
        this.confirmButton = this.el.querySelector("#canview-confirm-btn");
        this.modifyButton.addEventListener('click', ()=>this.onModifyCanViewClick(), false);
        this.confirmButton.addEventListener('click', ()=>this.onCanViewConfirmClick(), false);
        return this.el;
    }

}