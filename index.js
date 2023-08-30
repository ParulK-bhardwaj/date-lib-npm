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
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
        ]

        return months[this._date.getMonth()] // returns month
    }

    get mon() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]

        return months[this._date.getMonth()] // returns short month
    }

    get day() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        return days[this._date.getDay()] // returns day
    }

    get dy() {
        const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

        return days[this._date.getDay()] // returns short day
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

