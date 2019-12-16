var mongoose = require("mongoose");

// Schema

var schema = mongoose.Schema(
  {
    nombre:             { type: String, required: true}, // JUGADOR
    nacimiento:         { type: Date, default: null},
    pais:          { type: String, default: null}, 
    posicion:         { type: String, default: null}, //DEMARCACIÓN 
    sangre:            { type: String, default: null},
    isapre:           { type: String, default: null},
    status:           { type: String, default: null}, // 4 = Disponible, Reintegro, Lesionado, Ausente
    pie:             { type: String, default: null},
    estatura:         { type: Number, default: null},
    peso:             { type: Number, default: null},
    dorsal:           { type: Number, default: null},
    activo:           { type: Boolean, default: true},
    
    // FICHA ///
    ficha: {
      clubanterior:     { type: String},
      historiamedicapersonal: { 
        enfermedadesprevias:      { type: String},
        cirugias:                 { type: String},
        hospitalizaciones:        { type: String},
        alergias:                 { type: Object}, // desicion posterior previa pregunta con stakeholder
        lesionesgravesprevias:    { type: String},
        medicamentossuplementos:  { type: String},

          dolordisconforttoracico:	{ type: String},
          sincopelipotimia:         { type: String},
          disneafatiga:             { type: String},
          antecedentesoplo:         { type: String},
          antecedentehipertension:  { type: String},
        
      },
      historiamedicafamiliar: {
        muertesubita: { type: String },
        enfermedadcardiaca: { type: String },
        enfermedadcardiaca_familiar: { type: String }
      },

      examenfisico: {
        pesoIngreso: { type: Number },
        estaturaIngreso: { type: Number },
        ritmocardiaco: { type: String },
        frecuenciacardiaca: { type: String },
        soplos:{type:String},
        pulsosperifericos:{type:String},
        estigmas:{type:String},
        presionarterial:{type:String},
        faringe_amigdalas:{type:String},
        pulmonar:{type:String},
        abdomen:{type:String},
        hernias:{type:String},
        musculoesqueletico:{type:String}
      },
      
      electrocardiogramareposo: {
        type: String
      },
      
      otrosexamenes: {
        type: String
      },

      conclusion: {
        type: String
      },

      medico: {
        nombre: { type: String },
        rut: { type: String }
      },

      fecha: { type: Date, default: Date.now}
    }
    

  },

  {
    timestamps: true
  }
);

var Player = module.exports = mongoose.model("player", schema);

module.exports.get = function(callback, limit) {
  Player.find(callback).limit(limit);
};

