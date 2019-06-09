class MovieRank extends Component {

    constructor(props) {
        super(props);

    }

    renderDOM() {
        const el_html = `
            <div class="movie-rank-layout">
                <div id="movie-rank-title">票房排行</div>
                <div id="movie-rank-list"></div>
            </div>
        `;
        this.el = createDOMFromString(el_html);
        this.list = this.el.querySelector("#movie-rank-list");
        const hotMovies = this.props.hotMovies;
        if (hotMovies.length > 0) {
            for (let i = 0; i < hotMovies.length; i++) {
                const itemWrapper = createDOMFromString(`<div></div>`);
                mount(new MovieRankItem({index: i + 1, movie: hotMovies[i]}), itemWrapper);
                this.list.appendChild(itemWrapper);
            }
        }
        return this.el;
    }
}