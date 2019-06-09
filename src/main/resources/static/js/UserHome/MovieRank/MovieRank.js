class MovieRank extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hotMovies: this.props.hotMovies
        };
    }

    renderDOM() {
        const el_html = `
            <div class="movie-rank-layout">
                <div id="movie-rank-title">票房排行</div>
                <div id="movie-rank-list"></div>
            </div>`;
        this.el = createDOMFromString(el_html);
        this.list = this.el.querySelector("#movie-rank-list");
        if (this.state.hotMovies.length > 0) {
            this.state.hotMovies.forEach( movie => {
                let listItemHTML = `
                    <div class="movie-rank-item">
                        <div class="movie-rank-name">${movie.name}</div>    
                        <div class="movie-rank-boxOffice">${movie.boxOffice}</div>
                    </div>
                `
                let listItem = createDOMFromString(listItemHTML);
                listItem.addEventListener('click', () => this.toDetail(movie.movieId));
                this.list.appendChild(listItem);
            })
        }
        return this.el;
    }

    toDetail(movieId) {
        window.location.href = "/user/movieDetail?id=" + movieId;
    }
}