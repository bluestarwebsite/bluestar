import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export function Services() {
  return (
    <section className="p-8">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Build"
          description="We make pretty buildings"
          imgSrc="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        <Card
          title="See?"
          description="This ones pretty nice"
          imgSrc="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        <Card
          title="TALL!"
          description="We can even do TALL buildings"
          imgSrc="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />

        <Card
          title="Wavy"
          description="You like wavy buildings?"
          imgSrc="https://images.unsplash.com/photo-1598818384697-62330d600309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        />
        <Card
          title="Modern"
          description="This one's real blocky"
          imgSrc="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
        />
        <Card
          title="Modular"
          description="That is all :)"
          imgSrc="https://images.unsplash.com/photo-1547282548-b82b40322759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        />
      </div>
    </section>
  );
}

const Card = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div whileHover="hover" className="relative h-[300px] w-full">
      <div className="flex h-1/2 flex-col justify-center bg-gray-700 p-6">
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm font-light text-slate-300">{description}</p>
      </div>
      <motion.div
        initial={{
          top: "0%",
          right: "0%",
        }}
        variants={{
          hover: {
            top: "50%",
            right: "50%",
          },
        }}
        className="absolute inset-0 z-10 bg-slate-200"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <a
        href="#"
        rel="nofollow"
        className="absolute bottom-0 right-0 z-0 grid h-1/2 w-1/2 place-content-center bg-white text-black transition-colors hover:text-indigo-500"
      >
        <div className="flex items-center">
          <span className="text-xs">MORE</span>
          <FiArrowUpRight className="text-lg" />
        </div>
      </a>
    </motion.div>
  );
};
