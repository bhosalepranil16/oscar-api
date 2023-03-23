const mongoose = require('mongoose');

const oscarSchema = new mongoose.Schema({
    year: Number,
    title: String,
    location: String,
    date: String,
    honoring_line: String,
    awards: [
        {
            category: String,
            nominees: [
                {
                    field_one: String,
                    field_two: String
                }
            ],
            winner: {
                field_one: String,
                field_two: String
            }
        }
    ]
});

module.exports = mongoose.model('Oscar', oscarSchema);