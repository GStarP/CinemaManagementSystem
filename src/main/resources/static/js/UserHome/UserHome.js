class UserHome extends Component {
    constructor(props) {
        super(props);

    }

    renderDOM() {
        const el_html = `
            <div id="user-home-container">
                <div id="user-home-banner-ranking">
                    <div id="user-home-banner"></div>
                    <div id="user-home-ranking"></div>
                </div>
                <div id="user-home-hot-movies"></div> 
                <div id="user-home-coming-movies"></div> 
            </div>
        `;
        this.el = createDOMFromString(el_html);
        this.hotMovies = this.el.querySelector("#user-home-hot-movies");
        this.comingMovies = this.el.querySelector("#user-home-coming-movies");
        mount(new HotMovies({}), this.hotMovies);
        mount(new ComingMovies({}), this.comingMovies);

        return this.el;
    }
}

$(document).ready(function () {
    mount(new UserHome({}), document.querySelector("#user-home-wrapper"));
    mount(new UserHeader({}), document.querySelector("#nav-top-container"));
    const movies = [{
        movieId: 10,
        name: '复仇者联盟',
        boxOffice: 12345
    }, {
        movieId: 12,
        name: 'X战警',
        boxOffice: 888
    }, {
        movieId: 12,
        name: 'A战警',
        boxOffice: 887
    }, {
        movieId: 12,
        name: 'B战警',
        boxOffice: 850
    }, {
        movieId: 12,
        name: 'C战警',
        boxOffice: 400
    }, {
        movieId: 12,
        name: 'D战警',
        boxOffice: 100
    }];
    mount(new MovieRank({hotMovies: movies}), document.querySelector("#user-home-ranking"));
    mount(new Banner(), document.querySelector("#user-home-banner"));
});