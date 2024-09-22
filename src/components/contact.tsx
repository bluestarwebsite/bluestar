import { AnimatePresence, motion } from "framer-motion";
import { type Dispatch, type SetStateAction, useState } from "react";

const ShiftingContactForm = () => {
  const [selected, setSelected] = useState<"company" | "individual">(
    "individual",
  );
  return (
    <section className="p-4">
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse overflow-hidden rounded-lg shadow-lg lg:flex-row">
        <Form selected={selected} setSelected={setSelected} />
        <Images selected={selected} />
      </div>
    </section>
  );
};

const Form = ({
  selected,
  setSelected,
}: {
  selected: "company" | "individual";
  setSelected: Dispatch<SetStateAction<"company" | "individual">>;
}) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`w-full p-8 text-[#035DB7] transition-colors duration-[750ms]`}
    >
      <h3 className="mb-6 text-4xl font-bold">Contact us</h3>

      {/* Name input */}
      <div className="mb-6">
        <p className="mb-2 text-2xl">Hi 👋! My name is...</p>
        <input
          type="text"
          placeholder="Your name..."
          className={`w-full rounded-md bg-transparent p-2 placeholder-[#035DB7]/70 transition-colors duration-[750ms] focus:outline-0`}
        />
      </div>

      {/* Company/individual toggle */}
      <div className="mb-6">
        <p className="mb-2 text-2xl">and I represent...</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      {/* Company name */}
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{
              // 104 === height of element + margin
              // Alternatively can use mode='popLayout' on AnimatePresence
              // and add the "layout" prop to relevant elements to reduce
              // distortion
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="mb-2 text-2xl">by the name of...</p>
            <input
              type="text"
              placeholder="Your company name..."
              className={`w-full rounded-md bg-transparent p-2 placeholder-[#035DB7]/70 transition-colors duration-[750ms] focus:outline-0`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info */}
      <div className="mb-6">
        <p className="mb-2 text-2xl">I would love to ask about...</p>
        <textarea
          placeholder="Whatever your heart desires :)"
          className={`min-h-[150px] w-full resize-none rounded-md bg-transparent p-2 placeholder-[#035DB7]/70 transition-colors duration-[750ms] focus:outline-0`}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        className={`w-full rounded-lg bg-gray-500 py-3 text-center text-lg font-semibold text-[#035DB7] transition-colors duration-[750ms]`}
      >
        Submit
      </motion.button>
    </form>
  );
};

const FormSelect = ({
  selected,
  setSelected,
}: {
  selected: "company" | "individual";
  setSelected: Dispatch<SetStateAction<"company" | "individual">>;
}) => {
  return (
    <div className="w-fit overflow-hidden rounded border-[1px] border-white font-medium">
      <button
        className={`${
          selected === "individual" ? "text-[#035DB7]" : "text-black"
        } relative px-3 py-1.5 text-sm transition-colors duration-[750ms]`}
        onClick={() => setSelected("individual")}
      >
        <span className="relative z-10">An individual</span>
        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 z-0 bg-white"
          />
        )}
      </button>
      <button
        className={`${
          selected === "company" ? "text-black" : "text-[#035DB7]"
        } relative px-3 py-1.5 text-sm transition-colors duration-[750ms]`}
        onClick={() => setSelected("company")}
      >
        <span className="relative z-10">A company</span>
        {selected === "company" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 z-0 bg-white"
          />
        )}
      </button>
    </div>
  );
};

const Images = ({ selected }: { selected: "company" | "individual" }) => {
  return (
    <div className="relative min-h-[100px] w-full overflow-hidden bg-white">
      <motion.div
        initial={false}
        animate={{
          x: selected === "individual" ? "0%" : "100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={false}
        animate={{
          x: selected === "company" ? "0%" : "-100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default ShiftingContactForm;

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };

export function Contact() {
  return (
    <div className="flex h-screen w-screen flex-col px-32 py-16">
      <div className="h-full w-full rounded-lg">
        <ShiftingContactForm />
      </div>
    </div>
  );
}
