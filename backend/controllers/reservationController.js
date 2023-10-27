const Reservation = require("../models/reservationModel");

exports.getAllReservations = async (req, res) => {
    const result = await Reservation.findAll();
    res.json(result);
}

exports.getSingleReservation = async (req, res) => {
    const result = await Reservation.findByPk(req.params.res_id);
    if(result != null){
        return res.json(result);
    }
    return res.send("Reservation not found");  
}

exports.addNewReservation = async (req, res) => {
    console.log(req.body);
    
    const result = await Reservation.create({
        no_of_guest: req.body.no_of_guest,
        res_date: req.body.res_date,
        res_time: req.body.res_time,
        cust_notes: req.body.cust_notes,
        user_id: req.body.user_id,
        dt_id: req.body.dt_id
    });
    return res.json(result);
};

exports.editReservation = async (req, res) => {
    const result = await Reservation.findByPk(req.params.res_id);
    if(result != null){
        await Reservation.update({
            no_of_guest: req.body.no_of_guest,
            res_date: req.body.res_date,
            res_time: req.body.res_time,
            cust_notes: req.body.cust_notes,
            user_id: req.body.user_id,
            dt_id: req.body.dt_id}, 
            {where: {res_id: req.params.res_id}});
        return res.json(result);
    }
    return res.send("Reservation not found"); 
}

exports.deleteReservation = async (req, res) => {
    const result = await Reservation.findAll({where: {res_id: req.params.res_id}});
    if(result != null){
        await Reservation.destroy({where: {res_id: req.params.res_id}});
        return res.json(result);
    }
    return res.send("Reservation not found"); 
}