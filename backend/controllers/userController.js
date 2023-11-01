const User = require("../models/userModel");

exports.getAllUser = async (req, res) => {
    const result = await User.findAll();
    res.json(result);
}

exports.getSingleUser = async (req, res) => {
    const result = await User.findByPk(req.params.res_id);
    if(result != null){
        return res.json(result);
    }
    return res.send("User not found");  
}

exports.addNewUser = async (req, res) => {
    console.log(req.body);
    
    const result = await User.create({
        no_of_guest: req.body.no_of_guest,
        res_date: req.body.res_date,
        res_time: req.body.res_time,
        cust_notes: req.body.cust_notes,
        user_id: req.body.user_id,
        dt_id: req.body.dt_id
    });
    return res.json(result);
};

exports.editUser = async (req, res) => {
    const result = await User.findByPk(req.params.res_id);
    if(result != null){
        await User.update({
            no_of_guest: req.body.no_of_guest,
            res_date: req.body.res_date,
            res_time: req.body.res_time,
            cust_notes: req.body.cust_notes,
            user_id: req.body.user_id,
            dt_id: req.body.dt_id}, 
            {where: {res_id: req.params.res_id}});
        return res.json(result);
    }
    return res.send("User not found"); 
}

exports.deleteUser = async (req, res) => {
    const result = await User.findAll({where: {res_id: req.params.res_id}});
    if(result != null){
        await User.destroy({where: {res_id: req.params.res_id}});
        return res.json(result);
    }
    return res.send("User not found"); 
}