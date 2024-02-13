const {pool} = require('../db');

const getAllPart =  async (req,res) => {
    try{
        const [result] = await pool.query(
            "SELECT id_part, CONCAT(apellidos, ', ', nombres, ' (',edad, ')') AS names FROM participante ORDER BY apellidos");
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
const getPart = async (req,res) => {
    try{
        const [result] = await pool.query(
            "SELECT a.id_part,a.nombres,a.apellidos,b.estaca,c.barrio,d.compañia,e.habitacion FROM participante a JOIN estaca b ON a.estaca = b.est_id JOIN barrio c ON a.barrio = c.id_barrio JOIN comp d ON a.compañia = d.comp_id JOIN habitacion e ON a.habitacion=e.habit_id WHERE a.id_part = ?", [req.params.invId]);
        if (result.length == 0) {
            return res.status(404).json({message: "Task not found" });
        }
        res.json(result);
    }catch (error) {
        return res.status(500).json({message: error.message});
    }
}
const updatePart = async (req,res) => {
    try{
        const [result] = await pool.query(
            "UPDATE asistencia SET ficha_firmada = 'No' WHERE id_asist = ?", [req.params.id]);
        res.json(result);
    }catch (error) {
        return res.status(500).json({message: error.message});
    }
}
module.exports = {
    getAllPart,
    getPart,
    updatePart
}