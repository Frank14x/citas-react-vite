

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {

const handleEliminar =  () =>{
  const respuesta = confirm("Desea borrar el registro?");
  if (respuesta){
    eliminarPaciente(paciente.id);
  }
}
  return (

    <div className="m-5 bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <p className="font-bold md-3 text-gray-700 uppercase">Nombre: {" "}
        <span className="font-normal normal-case">{paciente.nombre}</span>
        </p>
          
        <p className="font-bold md-3 text-gray-700 uppercase">Responsable: {" "}
        <span className="font-normal normal-case">{paciente.cliente}</span>
        </p>

        <p className="font-bold md-3 text-gray-700 uppercase">Email: {" "}
        <span className="font-normal normal-case">{paciente.email}</span>
        </p>

        <p className="font-bold md-3 text-gray-700 uppercase">Fecha: {" "}
        <span className="font-normal normal-case">{paciente.fecha}</span>
        </p>

        <p className="font-bold md-3 text-gray-700 uppercase">Sintomas: {" "}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p> 

        <div className="flex justify-between mt-10">
          <button type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg uppercase"
          onClick={() => setPaciente(paciente)}
          >
              editar</button>

          <button type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg uppercase"
          onClick={() => handleEliminar()}
          >
            eliminar
          </button>
        </div>

    </div>
  )
}

export default Paciente
