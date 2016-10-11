var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    nip: String,
    nama: String,
    lantai: String,
    baris: String,
    kelompok: String,
    nomor: String,
    kolom: String,
    pdf: String
});

mongoose.model('Employee', EmployeeSchema);