import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  //hook
  const [nombre, setNombre] = useState("");
  const [cliente, setCliente] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() =>{

    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setCliente(paciente.cliente);
      setEmail(paciente.email);
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validando form
    if ([nombre, cliente, email, fecha, sintomas].includes("")) {
      console.log("Faltan campos por llenar");
      setError(true);
      return;
    }

    setError(false);

    //objeto Paciente
    const objPaciente = {
      nombre,
      cliente,
      email,
      fecha,
      sintomas,
    };

    if(paciente.id){
    //Editando 
      objPaciente.id = paciente.id;
      const pacienteEdit = pacientes.map (pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState  )
      setPacientes(pacienteEdit);
      setPaciente({});
    }else{
      //nuevo
      objPaciente.id = generarId();

      setPacientes([...pacientes, objPaciente]);
      }

    //reiniciar form
    setNombre("");
    setCliente("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Formulario</h2>

      <p className="mt-4 text-xl text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 m-5"
      >
        {error && <Error mensaje="Faltan campos por llenar" />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de las mascota"
            className="border-2 w-full p-2 mt-1 placeholder-gray-600 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="cliente"
            className="block text-gray-700 uppercase font-bold"
          >
            Cliente
          </label>
          <input
            id="cliente"
            type="text"
            placeholder="Nombre de responsable de la mascota"
            className="border-2 w-full p-2 mt-1 placeholder-gray-600 rounded-md"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Correo electronico
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="border-2 w-full p-2 mt-1 placeholder-gray-600 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="ingreso"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de ingreso
          </label>
          <input
            id="ingreso"
            type="date"
            className="border-2 w-full p-2 mt-1 placeholder-gray-600 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintoma"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintoma
          </label>
          <textarea
            id="sintomas"
            placeholder="Ingrese los sintomas de la mascota"
            className="border-2 w-full p-2 mt-1 placeholder-gray-600 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-semibold  hover:bg-indigo-700 cursor-pointer transition-shadow"
          value={paciente.id ?  "Editar paciente" : "Agregar Mascota para atender. "}
        />
      </form>
    </div>
  );
}

export default Formulario;
