class D {
	constructor(...args) {
		this._date = new Date(...args);
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