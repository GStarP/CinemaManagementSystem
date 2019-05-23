class HallInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hallName: this.props.hallName,
            seatRow: this.props.seatRow,
            seatColumn: this.props.seatColumn,
            seatArray: HallInfoForm.getSeatArray(this.props.seatRow, this.props.seatColumn)
        }
    }

    static getSeatArray(r, c) {
        let seatArray = [];
        for (let i = 0; i < r; i++) {
            let row = [];
            for (let j = 0; j < c; j++) {
                row.push(0);
            }
            seatArray.push(row);
        }
        return seatArray;
    }

    // 改变影厅规格的响应事件
    onScaleClick() {
        const row = document.querySelector("#hall-manage-form-scale-row-input").value;
        const column = document.querySelector("#hall-manage-form-scale-column-input").value;
        const hallName = document.querySelector("#hall-manage-form-name-input").value;
        this.setState({
            hallName: hallName,
            seatRow: row,
            seatColumn: column,
            seatArray: HallInfoForm.getSeatArray(row, column)
        })
    }

    // 确认录入影厅信息的响应事件
    onSubmitClick() {
        const hallName = document.querySelector("#hall-manage-form-name-input").value;
        const seats = this.state.seatArray;
        let seatNum = this.state.seatRow * this.state.seatColumn;
        for (let i = 0; i < this.state.seatRow; i++) {
            for (let j = 0; j < this.state.seatColumn; j++) {
                seatNum -= seats[i][j];
            }
        }
        const scale = ((seatNum) => {
            if (seatNum < 30) return 2;
            else if (seatNum < 80) return 1;
            else return 0;
        })(seatNum);

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

    // 排布座位响应事件
    onChooseSeat(rowId, columnId) {
        let seatArray = this.state.seatArray;
        seatArray[rowId][columnId] = seatArray[rowId][columnId] === 0 ? -1 : 0;
        const hallName = document.querySelector("#hall-manage-form-name-input").value;
        this.setState({
            hallName: hallName,
            seatArray: seatArray
        });
    }

    renderDOM() {
        let seatsLayout = ``;
        for (let i = 0; i < this.state.seatRow; i++) {
            let rowSeat = ``;
            for (let j = 0; j < this.state.seatColumn; j++) {
                if (this.state.seatArray[i][j] === 0)
                    rowSeat += `<div class='cinema-hall-seat' id="cinema-hall-seat${i}${j}"></div>`;
                else
                    rowSeat += `<div class='cinema-hall-seat-none' id="cinema-hall-seat${i}${j}"></div>`;
            }
            seatsLayout += `<div>${rowSeat}</div>`;
        }

        const el_html = `
            <div id="hall-manage-form">
                <div id="hall-manage-form-name">
                    <label id="hall-manage-form-name-label"><span class="error-text">*</span>影厅名称</label>
                    <div id="hall-manage-form-name-input-wrapper">
                        <input type="text" class="form-control" id="hall-manage-form-name-input" placeholder="请输入影厅名称" value="${this.state.hallName}">
                    </div>
                </div>
                <div id="hall-manage-form-scale">
                    <label id="hall-manage-form-scale-label"><span class="error-text">*</span>影厅规格</label>
                    <div id="hall-manage-form-scale-input-wrapper">
                        <input type="number" class="form-control" id="hall-manage-form-scale-row-input" value="${this.state.seatRow}">排 × 
                        <input type="number" class="form-control" id="hall-manage-form-scale-column-input" value="${this.state.seatColumn}">列
                        <button type="button" class="btn btn-primary" id="hall-manage-form-scale-confirm">确定</button>
                    </div>
                </div>
                <div id="hall-manage-form-seats">
                    <label id="hall-manage-form-seats-label"><span class="error-text">*</span>座位排布</label>
                    <div id="hall-manage-form-seats-input-wrapper">
                        ${seatsLayout}
                    </div>
                </div>
                <div id="hall-manage-form-submit">
                    <button type="button" class="btn btn-primary" id="hall-manage-form-submit-button">确定录入</button>
                </div>
            </div>
        `;
        this.el = createDOMFromString(el_html);

        this.scaleConfirm = this.el.querySelector("#hall-manage-form-scale-confirm");
        this.submitButton = this.el.querySelector("#hall-manage-form-submit-button");
        this.scaleConfirm.addEventListener('click', () => this.onScaleClick());
        this.submitButton.addEventListener('click', () => this.onSubmitClick());
        for (let i = 0; i < this.state.seatRow; i++) {
            for (let j = 0; j < this.state.seatColumn; j++) {
                this.el.querySelector("#cinema-hall-seat" + i + j)
                    .addEventListener('click', () => this.onChooseSeat(i, j));
            }
        }

        return this.el;
    }
}