class Clock {

    constructor(elem) {
        this.elem = elem;
    }

    clockFormat() {
        this.elem.addEventListener('click', () => {
            this.elem.classList.toggle('full');
        })
    }

    render() {
        this.elem.innerHTML = this.getTime();
    }

    getTime() {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        return `${hours}:${minutes}:${seconds}`
    }

}

class ClockChild1 extends Clock {
    constructor(elem) {
        super(elem);
    }

    getTime() {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let mseconds = time.getMilliseconds()
        if (this.elem.classList.contains('full')) {
            return `${hours}:${minutes}:${seconds}:${mseconds}`
        } else {
            return `${hours}:${minutes}`
        }
    }
}

class ClockChild2 extends Clock {
    constructor(elem) {
        super(elem);
    }

    getTime() {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds()
        let year = time.getFullYear()
        if (this.elem.classList.contains('full')) {
            return `${hours}:${minutes}:${seconds} , ${year}`
        } else {
            return `${hours}:${minutes}`
        }
    }
}

let firstElem = document.getElementById("clock1")
let secondElem = document.getElementById("clock2")

let time1 = new ClockChild1(firstElem);
setInterval(time1.render.bind(time1), 1000);
time1.clockFormat();

let time2 = new ClockChild2(secondElem);
setInterval(time2.render.bind(time2), 1000);
time2.clockFormat();
