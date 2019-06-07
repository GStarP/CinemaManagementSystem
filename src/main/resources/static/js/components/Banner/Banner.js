class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: props.images
        };
    }

    renderDOM() {
        const el_html = `
            <div id="banner-box">
                <div id="banner-list">
                    <ul>
                        <li class="banner-1"><a href="${this.state.images[0].navigate}"><img src="${this.state.images[0].url}"/></a></li>
                        <!--banner-2是位于正中显示的banner-->
                        <li class="banner-2"><a href="${this.state.images[1].navigate}"><img src="${this.state.images[1].url}"/></a></li>
                        <li class="banner-3"><a href="${this.state.images[2].navigate}"><img src="${this.state.images[2].url}"/></a></li>
                    </ul>
                </div>
                <div id="button-list">
                    <a id="banner1-btn" href="#"><div class="bg-grey"></div></a>
                    <a id="banner2-btn" href="#"><div class="bg-black"></div></a>
                    <a id="banner3-btn" href="#"><div class="bg-grey"></div></a>
                </div>
            </div>
        `;
        this.el = createDOMFromString(el_html);

        this.el.querySelector("#banner1-btn").addEventListener('click', () => this.showBanner1() );
        this.el.querySelector("#banner2-btn").addEventListener('click', () => this.showBanner2() );
        this.el.querySelector("#banner3-btn").addEventListener('click', () => this.showBanner3() );

        let banners = this.el.querySelectorAll("#banner-list ul li");
        banners.forEach( b => {
            b.addEventListener('click', () => this.judgeAction(b));
        })

        return this.el;
    }

    judgeAction(element) {
        switch (element.getAttribute("class")) {
            case "banner-1":
                this.prefBanner();
                break;
            case "banner-2":
                break;
            case "banner-3":
                this.nextBanner();
                break;
        }
    }

    prefBanner() {
        //为了解决setInterval中this指向window对象的问题
        let banner1 = this.el ? this.el.querySelector(".banner-1") : this.document.querySelector("#banner-box .banner-1");
        let banner2 = this.el ? this.el.querySelector(".banner-2") : this.document.querySelector("#banner-box .banner-2");
        let banner3 = this.el ? this.el.querySelector(".banner-3") : this.document.querySelector("#banner-box .banner-3");
        banner1.setAttribute("class","banner-2");
        banner2.setAttribute("class","banner-3");
        banner3.setAttribute("class","banner-1");

        let btns = this.el ? this.el.querySelectorAll("#button-list a div") : this.document.querySelectorAll("#button-list a div");
        for (let i = 0; i < btns.length; i++) {
            if (btns[i].getAttribute("class") == "bg-black") {
                btns[i].setAttribute("class","bg-grey");
                btns[ (i-1+btns.length) % btns.length].setAttribute("class","bg-black");
                break;
            }
        }
    }

    nextBanner() {
        //为了解决setInterval中this指向window对象的问题
        let banner1 = this.el ? this.el.querySelector(".banner-1") : this.document.querySelector("#banner-box .banner-1");
        let banner2 = this.el ? this.el.querySelector(".banner-2") : this.document.querySelector("#banner-box .banner-2");
        let banner3 = this.el ? this.el.querySelector(".banner-3") : this.document.querySelector("#banner-box .banner-3");
        banner1.setAttribute("class","banner-3");
        banner2.setAttribute("class","banner-1");
        banner3.setAttribute("class","banner-2");

        let btns = this.el ? this.el.querySelectorAll("#button-list a div") : this.document.querySelectorAll("#button-list a div");
        for (let i = 0; i < btns.length; i++) {
            if (btns[i].getAttribute("class") == "bg-black") {
                btns[i].setAttribute("class","bg-grey");
                btns[ (i+1) % btns.length].setAttribute("class","bg-black");
                break;
            }
        }
    }

    showBanner1() {
        this.el.getElementsByTagName("li")[0].setAttribute("class","banner-2");
        this.el.getElementsByTagName("li")[1].setAttribute("class","banner-3");
        this.el.getElementsByTagName("li")[2].setAttribute("class","banner-1");
        this.el.querySelectorAll("#button-list a div")[0].setAttribute("class","bg-black");
        this.el.querySelectorAll("#button-list a div")[1].setAttribute("class","bg-grey");
        this.el.querySelectorAll("#button-list a div")[2].setAttribute("class","bg-grey");
    }

    showBanner2() {
        this.el.getElementsByTagName("li")[0].setAttribute("class","banner-1");
        this.el.getElementsByTagName("li")[1].setAttribute("class","banner-2");
        this.el.getElementsByTagName("li")[2].setAttribute("class","banner-3");
        this.el.querySelectorAll("#button-list a div")[0].setAttribute("class","bg-grey");
        this.el.querySelectorAll("#button-list a div")[1].setAttribute("class","bg-black");
        this.el.querySelectorAll("#button-list a div")[2].setAttribute("class","bg-grey");
    }

    showBanner3() {
        this.el.getElementsByTagName("li")[0].setAttribute("class","banner-3");
        this.el.getElementsByTagName("li")[1].setAttribute("class","banner-1");
        this.el.getElementsByTagName("li")[2].setAttribute("class","banner-2");
        this.el.querySelectorAll("#button-list a div")[0].setAttribute("class","bg-grey");
        this.el.querySelectorAll("#button-list a div")[1].setAttribute("class","bg-grey");
        this.el.querySelectorAll("#button-list a div")[2].setAttribute("class","bg-black");
    }
}