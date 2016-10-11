var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

router.route('/:searchArgs')
        .get(function(req, res){
            // split arguments
            var searchArgs = req.params.searchArgs;
            var splitedArgs = searchArgs.split("=");

            var criteria = splitedArgs[0];
            var input = splitedArgs[1];

            if(criteria == "nip")
            {
                Employee.find({
                    nip : { "$regex" : input, "$options": "i" }
                }, function(err, data){
                    if(err)
                        return res.send(500, err);
                        
                    return res.json(data);
                });
            }
            else if(criteria == "nama")
            {
                Employee.find({
                    nama : { "$regex" : input, "$options": "i" }
                }, function(err, data){
                    if(err)
                        return res.send(500, err);
                        
                    return res.json(data);
                });
            } 
            else if(criteria == "lantai")
            {
                Employee.find({
                    lantai : { "$regex" : input, "$options": "i" }
                }, function(err, data){
                    if(err)
                        return res.send(500, err);
                        
                    return res.json(data);
                });
            } 
            else if(criteria == "baris")
            {
                Employee.find({
                    baris : { "$regex" : input, "$options": "i" }
                }, function(err, data){
                    if(err)
                        return res.send(500, err);
                        
                    return res.json(data);
                });
            } 
            else if(criteria == "kelompok")
            {
                Employee.find({
                    kelompok : { "$regex" : input, "$options": "i" }
                }, function(err, data){
                    if(err)
                        return res.send(500, err);
                        
                    return res.json(data);
                });
            } 
            else if(criteria == "nomor")
            {
                Employee.find({
                    nomor : { "$regex" : input, "$options": "i" }
                }, function(err, data){
                    if(err)
                        return res.send(500, err);
                        
                    return res.json(data);
                });
            } 
            else if(criteria == "kolom")
            {
                Employee.find({
                    kolom : { "$regex" : input, "$options": "i" }
                }, function(err, data){
                    if(err)
                        return res.send(500, err);
                        
                    return res.json(data);
                });
            } 
        })

module.exports = router;