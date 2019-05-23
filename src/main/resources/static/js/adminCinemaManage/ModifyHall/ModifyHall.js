class ModifyHall extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modifiableHalls: []
        }
    }

    renderDOM() {
        const el_html = `
            <div id="hall-manage-modify">
                
            </div>
        `;
        this.el = createDOMFromString(el_html);
        return this.el;
    }

}