import { motion } from "framer-motion";

export function Services() {
  return (
    <section className="my-auto rounded-md p-8 drop-shadow-lg">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 h-[300px] w-full overflow-hidden">
          <h1 className="text-bold text-2xl">Services</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            elementum, nulla in tincidunt tincidunt, nisi risus lacinia nisi,
            sit amet auctor nisl nisl eu elit. Donec in ligula eu urna tincidunt
            ultrices. Sed elementum, nulla in tincidunt tincidunt, nisi risus
            lacinia nisi, sit amet auctor nisl nisl eu elit. Donec in ligula eu
            urna tincidunt ultrices. Sed elementum, nulla in tincidunt
            tincidunt, nisi risus lacinia nisi, sit amet auctor nisl nisl eu
            elit. Donec in ligula eu urna tincidunt ultrices. Sed elementum,
            nulla in tincidunt tincidunt, nisi risus lacinia nisi, sit amet
            auctor nisl nisl eu elit. Donec in ligula eu urna tincidunt
            ultrices. Sed elementum, nulla in tincidunt tincidunt, nisi risus
            lacinia nisi, sit amet auctor nisl nisl eu elit. Donec in ligula eu
            urna tincidunt ultrices. Sed elementum, nulla in tincidunt
            tincidunt, nisi risus lacinia nisi, sit amet auctor nisl nisl eu
            elit. Donec in ligula eu urna tincidunt ultrices. Sed elementum,
            nulla in tincidunt tincidunt, nisi risus lacinia nisi, sit amet
            auctor nisl nisl eu elit. Donec in ligula eu urna tincidunt
            ultrices.
          </p>
        </div>
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
    <div className="h-[300px] w-full overflow-hidden">
      <motion.div
        whileHover="hover"
        className="relative flex h-[300px] w-full items-center justify-center"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        variants={{
          hover: {
            scale: 1.1,
          },
        }}
      >
        <div className="z-20 my-auto flex flex-col">
          <h3 className="mx-auto text-white">{title}</h3>
          <p className="mx-auto text-white">{description}</p>
        </div>
        <motion.div
          initial={{
            opacity: 1,
          }}
          variants={{
            hover: {
              opacity: 0,
            },
          }}
          className="absolute inset-0 z-10 bg-brand-blue"
        />
      </motion.div>
    </div>
  );
};
