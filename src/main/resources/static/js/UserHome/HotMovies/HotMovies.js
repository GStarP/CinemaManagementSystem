class HotMovies extends Component{
    constructor(props) {
        super(props);

    }

    renderDOM() {
        const el_html = `
            <div id="hot-movies-container">
                <div id="hot-movies-title">
                    近期最热
                </div>
                <div id="hot-movies-grid">
                </div>
            </div>
        `;
        this.el = createDOMFromString(el_html);
        this.hotMovies = this.el.querySelector("#hot-movies-grid");

        for (let i = 0; i < 10; i++) {
            const child = createDOMFromString("<div></div>");
            mount(new MoviePoster({
                movie: {
                    id: 10,
                    name: "夏目友人帐",
                    likeCount: 10,
                    posterUrl: "http://n.sinaimg.cn/translate/640/w600h840/20190312/ampL-hufnxfm4278816.jpg",
                },
                type: "购票"
            }), child);
            this.hotMovies.appendChild(child);
        }

        return this.el;
    }
}