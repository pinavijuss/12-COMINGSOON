class Progressbar {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.allProgressBars = null;
        this.init();
    }

    init() {
        if (!this.isValidSelector() ||
            !this.isValidData()) {
            console.error('ERROR: nepraejo pirmines patikros');
            return false;
        }
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: nerestas elementas, pagal duota selector');
            return false;
        }
        this.render();
        this.addEvent();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }

    isValidData() {
        if (!Array.isArray(this.data) ||
            this.data.length === 0) {
            return false;
        }
        return true;
    }

    render() {
        let HTML = '';

        for (const bar of this.data) {
            HTML += `<div class="progress-bar">
                        <div class="top">
                            <div class="title">${bar.title}</div>
                            <div class="value">${bar.value}%</div>
                        </div>
                        <div class="bottom">
                            <div class="progress" style="width: ${bar.value}%;">
                                <div class="value"></div>
                            </div>
                        </div>
                    </div>`;
        }

        this.DOM.innerHTML += HTML;
        this.allProgressBars = document.querySelectorAll(".progress-bar");
        console.log(this.allProgressBars);

    }
    addEvent() {
        window.addEventListener('scroll', () => {
            // const scrollPosition = window.scrollY;
            // const screenHeight = window.innerHeight;
            const screenBottom = window.scrollY + window.innerHeight;
            console.log('jhkjhf');
            for (let i = 0; i < this.allProgressBars.length; i++) {
                const element = this.allProgressBars[i];
                const elementBottom = element.offsetHeight + element.offsetTop;
                if (screenBottom >= elementBottom) {
                    element.classList.add('loading');
                    console.log('Animuojame');
                }
            }
        })
    }
}

export { Progressbar }