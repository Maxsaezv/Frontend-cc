var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var injurySchema = new Schema(
    {
        playerId:           { type: String, required: false},
        doctorId:           { type: ObjectId, required: false},
        nombre:             { type: String, required: [false, 'Nombre de lesión es requerida']},
        activa:             { type: Boolean, default: true},
        //observaciones:      { type: Object},
        fecha:              { type: Date, required: false, default: Date.now() }, //FECHA LESION
        reintegroestimado:  { type: Date, required: [false, 'Fecha estimada de reingreso es requerida'] }, // FECHA REINTEGRO
        lateralidad:        { type: String},
        partidosPerdidos:   { type: Number}, // PARTIDOS PERDIDOS *pedir cuando se cierre la lesión
        gravedad:           { type: String, required: [false, 'Gravedad es requerida']}, // GRAVEDAD *leve, menor, moderada, grave
        /* Gravedad según excel
        gravedad:           { type: {
            valor:          { type: Number},
            resultado:      { type: String}
            }
        }*/

        // desde acá campos que no fueron considerados en la reunión
        tipo:               { type: String}, // L/E *lesion o enfermedad
        mecanismo:          { type: String}, // MECANISMO *directo, indirecto
        entorno:            { type: String}, // ENTORNO *partido, entrenamiento, gym, seleccion, otros
        dinamica:           { type: String}, // DINAMICA *tension, duracion, velocidad, recuperacion activa, partido, descanso
        actividad:          { type: String}, // ACTIVIDAD
        superficie:         { type: String}, // SUPERFICIE *sintetico, natural
        origen:             { type: String}, // ORIGEN *aguda, cronica
        traumatica:         { type: Boolean}, // TRAUMATICA *si,no
        clasificacion:      { type: String}, // CLASIFICACION
        zona:               { type: String}, // ZONA
    }, 

    {
        timestamps: true
    }
)

var Injury = module.exports = mongoose.model('injury', injurySchema);
''