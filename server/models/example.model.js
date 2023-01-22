const mongoose = require('mongoose');

/* 
{PATH} will be replaced with the field name, such as "stringField".
*/
const ExampleSchema = new mongoose.Schema(
    {
        stringField: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters.']
        },
        numberField: {
            type: Number,
            required: [true, '{PATH} is required'],
            min: [5, '{PATH} must be at least {MIN}.']
        },
        dateField: {
            type: Date,
        },
        booleanField: {
            type: Boolean,
            default: false,
        },
        arrayField: {
            // can also be [String], [Boolean], [ExampleSchema], etc.
            type: [Number],
        },
    },
    { timestamps: true }
)

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Example = mongoose.model('Example', ExampleSchema);

// Always exporting an object even when we only have one thing to export
// makes it easy to add more exports later if ever needed without breaking
// any code that imports from this file.
module.exports = { Example };