class ComingMovies extends Component {
    constructor(props) {
        super(props);

    }

    renderDOM() {
        const el_html = `
            <div id="coming-movies-container">
                <div id="coming-movies-title">
                    即将上映
                </div>
                <div id="coming-movies-grid">
                </div>
            </div>
        `;
        this.el = createDOMFromString(el_html);
        this.comingMovies = this.el.querySelector("#coming-movies-grid");

        for (let i = 0; i < 10; i++) {
            const child = createDOMFromString("<div></div>");
            mount(new MoviePoster({
                movie: {
                    id: 10,
                    name: "夏目友人帐",
                    likeCount: 10,
                    posterUrl: "http://n.sinaimg.cn/translate/640/w600h840/20190312/ampL-hufnxfm4278816.jpg",
                },
                type: "详情"
            }), child);
            this.comingMovies.appendChild(child);
        }

        return this.el;
    }
}