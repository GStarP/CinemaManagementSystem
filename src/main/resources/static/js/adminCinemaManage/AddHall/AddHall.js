class AddHall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hallName: '',
            seatRow: 10,
            seatColumn: 22
        }
    }

    // 录入影厅信息点击事件
    onSubmitClick(hallName, seats, scale){
        fetch(
            '/hall/add',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: hallName,
                    seats: seats,
                    scale: scale
                })
            })
            .then((response) => {
                if (response.ok) {
                    alert("影厅信息录入成功！");
                    // 重置输入框
                    this.setState({
                        hallName: '',
                        seatRow: this.props.seatRow,
                        seatColumn: this.props.seatColumn,
                        seatArray: HallInfoForm.getSeatArray(this.props.seatRow, this.props.seatColumn)
                    })
                } else {
                    alert(response.statusText);
                }

            })
            .catch((error) => {
                alert(error.json())
            });
    }

    renderDOM() {
        const el_html = `
            <div id="hall-manage-add-wrapper"></div>
        `;

        this.el = createDOMFromString(el_html);
        this.addWrapper = this.el.querySelector("#hall-manage-add-wrapper");
        mount(new HallInfoForm({
            hallName: this.state.hallName,
            seatRow: this.state.seatRow,
            seatColumn: this.state.seatColumn,
            operationType: 0,
            onSubmitClick: (hallName, seats, scale)=>this.onSubmitClick(hallName, seats, scale)
        }), this.addWrapper);

        return this.el;
    }
}