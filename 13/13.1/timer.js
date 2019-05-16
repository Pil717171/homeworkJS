export class Timer {
    constructor (current, element) {
       this.element = element;
       this.current = current;
       this.timerId;
    }

    start () {
        return new Promise ((res, rej) => {
            this.timerId = setInterval(() => {
                this.current--;
                this.element.innerHTML = this.current;
                if (this.current === 0) {
                    this.pause();
                    return res();
                }
            }, 1000);
        })
    }

    pause () {
        console.log('pause')
        clearInterval(this.timerId)
    }

    reset (current, element) {
        this.current = current;
        this.element = element;
    }

}

