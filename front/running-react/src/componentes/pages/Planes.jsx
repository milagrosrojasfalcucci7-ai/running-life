import React, { useState } from 'react';

const Planes = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Definición de los planes gratuitos de 2 meses (8 semanas)
  const plans = [
    { 
      id: '21k', 
      title: 'Plan Base 21k', 
      duration: '2 meses (8 Semanas)', 
      description: 'Ideal para corredores que buscan completar su primera media maratón.',
      weeks: [
        { week: 1, focus: 'Base aeróbica y adaptación', sessions: '3 días de trote suave + 1 fondo corto (8km)' },
        { week: 2, focus: 'Aumento progresivo de volumen', sessions: '3 días de trote + 1 pasadas suaves + 1 fondo (10km)' },
        { week: 3, focus: 'Fuerza y resistencia', sessions: '2 días de gimnasio + 3 días de trote + 1 fondo (12km)' },
        { week: 4, focus: 'Semana de descarga', sessions: 'Volumen reducido para asimilar el esfuerzo' },
        { week: 5, focus: 'Introducción a ritmos de carrera', sessions: '3 días de trote + 1 pasadas a umbral + 1 fondo (14km)' },
        { week: 6, focus: 'Pico de kilometraje', sessions: '3 días de trote + 1 pasadas + 1 fondo largo (16km)' },
        { week: 7, focus: 'Consolidación', sessions: 'Reducción leve de volumen, mantenimiento de ritmo' },
        { week: 8, focus: 'Tapering (puesta a punto)', sessions: 'Descanso activo previo al objetivo de 21k' }
      ]
    },
    { 
      id: '50k', 
      title: 'Plan Ultra 50k', 
      duration: '2 meses (8 Semanas)', 
      description: 'Entrenamiento avanzado de volumen y terrenos mixtos para ultra maratón.',
      weeks: [
        { week: 1, focus: 'Base de acumulación', sessions: '4 días de trote + 1 fondo en desnivel (15km)' },
        { week: 2, focus: 'Resistencia muscular', sessions: '4 días de trote + series en cuestas + fondo (18km)' },
        { week: 3, focus: 'Volumen progresivo', sessions: '5 días de entrenamiento + fondo largo (22km)' },
        { week: 4, focus: 'Semana de descarga', sessions: 'Recuperación activa y control de cargas' },
        { week: 5, focus: 'Simulación de carrera', sessions: 'Prueba de equipamiento y nutrición + fondo (25km)' },
        { week: 6, focus: 'Pico de ultra distancia', sessions: 'Fondo máximo acumulado del ciclo (30km)' },
        { week: 7, focus: 'Inicio de tapering', sessions: 'Disminución del kilometraje manteniendo técnica' },
        { week: 8, focus: 'Puesta a punto final', sessions: 'Descanso y activación previa al evento' }
      ]
    }
  ];

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {!selectedPlan ? (
        // VISTA 1: Lista de planes disponibles
        <>
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Planes de Entrenamiento Gratuitos</h1>
          <p className="text-gray-600 mb-6">Elegí tu objetivo y preparate con nuestros programas estructurados de 2 meses.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map(plan => (
              <div key={plan.id} className="border border-gray-200 p-6 rounded-xl shadow-sm bg-white flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{plan.title}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full mb-3 font-medium">
                    {plan.duration}
                  </span>
                  <p className="text-gray-700 text-sm mb-6">{plan.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedPlan(plan)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition text-center cursor-pointer"
                >
                  Ver Plan de 8 Semanas
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        // VISTA 2: Detalle semana a semana del plan seleccionado
        <div>
          <button 
            onClick={() => setSelectedPlan(null)}
            className="text-blue-600 hover:underline mb-4 inline-block font-medium text-sm cursor-pointer"
          >
            &larr; Volver a todos los planes
          </button>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedPlan.title}</h2>
          <p className="text-gray-600 mb-6">{selectedPlan.description} ({selectedPlan.duration})</p>

          <div className="space-y-4">
            {selectedPlan.weeks.map((w) => (
              <div key={w.week} className="border border-gray-200 p-4 rounded-lg bg-white shadow-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-blue-600">Semana {w.week}</span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{w.focus}</span>
                </div>
                <p className="text-sm text-gray-700">{w.sessions}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button 
              onClick={() => alert(`¡Te has inscripto exitosamente al ${selectedPlan.title}!`)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition shadow-sm cursor-pointer"
            >
              Inscribirme a este Plan Gratis
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planes;