class UserHome extends Component {
    constructor(props) {
        super(props);

    }

    renderDOM() {
        const el_html = `
            <div id="user-home-container">
                <div id="user-home-movies"></div>
                <div id="user-home-ranking">这是排行版</div>
            </div>
        `;
        this.el = createDOMFromString(el_html);
        this.container = this.el.querySelector("#user-home-movies");
        for (let i = 0; i < 10; i++) {
            const child = createDOMFromString("<div></div>");
            mount(new MoviePoster({
                movie: {
                    id: 10,
                    name: "夏目友人帐",
                    likeCount: 10,
                    posterUrl: "http://n.sinaimg.cn/translate/640/w600h840/20190312/ampL-hufnxfm4278816.jpg"
                }
            }), child);
            this.container.appendChild(child);
        }
        return this.el;
    }
}

$(document).ready(function () {
    mount(new UserHome({}), document.querySelector("#user-home-wrapper"));
    mount(new UserHeader({}), document.querySelector("#nav-top-container"));
});