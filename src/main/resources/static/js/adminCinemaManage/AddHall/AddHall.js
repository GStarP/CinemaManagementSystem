class AddHall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hallName: '',
            seatRow: 10,
            seatColumn: 22
        }
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
        }), this.addWrapper);

        return this.el;
    }
}