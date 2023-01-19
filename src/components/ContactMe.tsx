import { useForm, SubmitHandler } from "react-hook-form";

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Props {}

export const ContactMe = ({}: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:memedina.py@gmail.com?subject=${formData.subject}&body=Hola, soy ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contáctame
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Tengo justo lo que necesitas.{" "}
          <span className="decoration-[#FF0149]/50 underline">Hablemos.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#FF0149] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+595972254105</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#FF0149] h-7 w-7 animate-pulse" />
            <p className="text-2xl">memedina.py@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#FF0149] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Mi Direccion</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Nombre"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Correo"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Sujeto"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Mensaje"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#FF0149] py-5 px-10 rounded-md text-[#F5F5F5] font-bold text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
