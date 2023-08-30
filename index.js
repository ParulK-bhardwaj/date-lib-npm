const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dys = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class D {
	constructor(...args) {
		this._date = new Date(...args);
	}

    get year() { // getter method
		return this._date.getFullYear() // returns full year
	}

    get yr() {
		return this._date.getFullYear() % 100 // returns short year
	}

    get month() {
        return months[this._date.getMonth()] // returns month
    }

    get mon() {
        return mons[this._date.getMonth()] // returns short month
    }

    get day() {
        return days[this._date.getDay()] // returns day
    }

    get dy() {
        return dys[this._date.getDay()] // returns short day
    }

    get date() {
        return this._date.getDate() // returns date
    }

    get hours() {
        return this._date.getHours() // returns hours
    }

    get mins() {
        return this._date.getMinutes() // returns minutes
    }

    get secs() {
        return this._date.getSeconds() // returns seconds
    }

    // Challenge 3

    format( mask = 'Y M D') {
        const dateStr = mask.split('').map(char => {
            switch (char) {
                case 'Y':
                    return this.year
                case 'y':
                    return this.yr
                case 'M':
                    return this.month
                case 'm':
                    return this.mon
                case 'D':
                    return this.date.toString().padStart(2, '0')
                case 'd':
                    return this.date
                case 'H':
                    return this.hours.toString().padStart(2, '0')
                case 'h':
                    return this.hours
                case 'I':
                    return this.mins.toString().padStart(2, '0')
                case 'i':
                    return this.mins
                case 'S':
                    return this.secs.toString().padStart(2, '0')
                case 's':
                    return this.secs
                default:
                    return char
            }       
        } ).join('')
        return dateStr
    }

    // Challenge 4
    when() {
        const currentDate = new Date(); // Get the current date and time
        const diffInSeconds = Math.floor((this._date - currentDate) / 1000)
    
        if (diffInSeconds === 0) {
            return 'today'
        }
        const seconds = Math.abs(diffInSeconds);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);
    
        if (years > 0) {
            return `${years} ${years === 1 ? 'year' : 'years'} ${diffInSeconds > 0 ? 'from now' : 'ago'}`;
        } else if (months > 0) {
            return `${months} ${months === 1 ? 'month' : 'months'} ${diffInSeconds > 0 ? 'from now' : 'ago'}`;
        } else if (days > 0) {
            return `${days} ${days === 1 ? 'day' : 'days'} ${diffInSeconds > 0 ? 'from now' : 'ago'}`;
        } else if (hours > 0) {
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ${diffInSeconds > 0 ? 'from now' : 'ago'}`;
        } else if (minutes > 0) {
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ${diffInSeconds > 0 ? 'from now' : 'ago'}`;
        } else {
            return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ${diffInSeconds > 0 ? 'from now' : 'ago'}`;
        }
    } 
}

// The date Object can be initialized in different ways:

// With no parameters: 
const a = new D()
// Create a date from a string (single parameter)
const b = new D('9/26/1965') 
// Create a date from some numbers (list of parameters)
const c = new D(1970, 1, 1, 0, 0, 0) // with year, month, date, hours, mins
// With a Date
const d = new D(new Date()) // with another date object

console.log(a._date)
console.log(b._date)

console.log( d.year )
console.log( d.yr )
console.log( d.month )
console.log( d.mon )
console.log( d.day )
console.log( d.dy )
console.log( d.date ) 
console.log( d.hours ) 
console.log( d.mins )  
console.log( d.secs )

// Challenge 3

const e = new D(2023, 0, 2, 3, 4, 5)
console.log(e.format())              // 2017 January 02
console.log(e.format('y/m/D'))       // 17/Jan/2
console.log(e.format('H:I:S'))       // 03:04:05
console.log(e.format('h:i:s'))       // 3:4:5
console.log(e.format('Y-M-D h:I:S'))

// challenge 4
const f = new D(2023, 1, 2, 3, 4, 5)
console.log(f.when()) // 6 months ago
const g = new D(2023, 10, 30, 3, 4, 5)
console.log(g.when()) // 3 months from now
const h = new D(2028, 10, 2, 3, 4, 5)
console.log(h.when()) // 5 years from now
const i = new D(2023, 7, 30, 14, 4, 5)
console.log(i.when()) // 3 days from now
const j = new D()
console.log(j.when()) // today