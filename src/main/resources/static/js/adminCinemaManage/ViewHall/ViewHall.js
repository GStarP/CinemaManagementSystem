class ViewHall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            halls: []
        };
        this.getCinemaHalls();
    }

    setState(state) {
        super.setState(state);
    }

    getCinemaHalls() {
        getRequest(
            '/hall/all',
            (res) => this.setState({halls: res.content}),
            error => alert(JSON.stringify(error))
        );
    }

    renderDOM() {
        $('#hall-card').empty();
        let hallDomStr = "";
        this.state.halls.forEach(hall => {
            const {id, name, seats, scale} = hall;
            let seat = "";
            // 座位布局
            for (let i = 0; i < seats.length; i++) {
                let temp = "";
                for (let j = 0; j < seats[0].length; j++) {
                    if (seats[i][j] === 0) temp += "<div class='cinema-hall-seat'></div>";
                    else temp += "<div class='cinema-hall-seat-none'></div>";
                }
                seat+= "<div>"+temp+"</div>";
            }

            const hallDom =
                "<div class='cinema-hall'>" +
                "<div>" +
                "<span class='cinema-hall-name'>" + name + "</span>" +
                "<span class='cinema-hall-size'>" + seats[0].length + '*' + seats.length + "</span>" +
                "</div>" +
                "<div class='cinema-seat'>" + seat +
                "</div>" +
                "</div>";

            hallDomStr += hallDom;
        });

        return createDOMFromString(hallDomStr);
    }
}