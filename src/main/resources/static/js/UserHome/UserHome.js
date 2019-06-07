class UserHome extends Component {
    constructor(props) {
        super(props);

    }

    renderDOM() {
        const el_html = `
            <div id="user-home-container">
                <div id="user-home-banner"></div>
                <div id="user-home-ranking"></div>
                <div id="user-home-movies"></div> 
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
    const movies = [{
        movieId: 10,
        name: '复仇者联盟',
        boxOffice: 12345
    },{
        movieId: 12,
        name: 'X战警',
        boxOffice: 888
    }];
    mount(new MovieRank({ hotMovies: movies }), document.querySelector("#user-home-ranking"));
    const images = [{
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1246180815,1068531272&fm=26&gp=0.jpg',
        navigate: '#'
    },{
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559894859551&di=4c6309c77d87473a15c2c0b2da4f6aa7&imgtype=0&src=http%3A%2F%2Fimg4.a0bi.com%2Fupload%2Fttq%2F20180131%2F1517407295942.jpg',
        navigate: '#'
    },{
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560489614&di=c0d417ec78d087bec02e61b7ec7f7bcb&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F0a728a07a1dd3bca30ecd9c6e8f84b2573d52699.jpg',
        navigate: '#'
    }];
    mount(new Banner({ images: images }), document.querySelector("#user-home-banner"));
});