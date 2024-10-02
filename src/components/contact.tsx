import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Mail, Phone, Building2, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  type Dispatch,
  type SetStateAction,
  useState,
  useRef,
  useEffect,
} from "react";
import autoAnimate from "@formkit/auto-animate";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  company: z.string().min(0).max(50),
  phone: z.string().min(0).max(17),
  message: z.string().min(0).max(500),
});

export function Contact() {
  const [message, setMessage] = useState(false);
  const [selected, setSelected] = useState<"company" | "individual">("company");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const parent = useRef(null);
  useEffect(() => {
    if (parent.current) {
      autoAnimate(parent.current);
    }
  }, [parent]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <div className="mx-auto my-auto flex h-[33vw] w-[91vw] flex-col items-center justify-center p-4">
            <p className="mb-4 text-4xl font-semibold text-brand-blue">
              We would love to hear from you!
            </p>
            <div className="flex h-full w-full flex-row gap-4" ref={parent}>
              <div
                className={`${message ? "" : "mx-auto"} flex h-full w-1/2 bg-[url('/cardbg.jpg')] shadow-lg`}
              >
                <div className="mx-4 my-auto flex h-fit w-full flex-col gap-2 pl-12">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            className="text-bold px-7 text-4xl"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <p className="pl-8 text-gray-600"> Saavy Investor </p>
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <div className="no-wrap flex flex-row">
                        <AnimatePresence>
                          {selected === "company" && (
                            <motion.div
                              initial={{
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
                            >
                              <div className="flex flex-row">
                                <Building2 />
                                <FormField
                                  control={form.control}
                                  name="company"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          placeholder="Your Company"
                                          {...field}
                                        />
                                      </FormControl>
                                    </FormItem>
                                  )}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="flex flex-row">
                        <Mail />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Your Email" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-row">
                        <Phone />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Your Phone Number"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button
                        className="rounded-full bg-brand-blue px-4 py-2 text-white"
                        onClick={() => setMessage(!message)}
                      >
                        <MessageCircle />
                        {`${message ? "Remove" : "Add"} Message`}
                      </Button>
                    </div>
                    <div className="flex flex-col">
                      {/*<FormSelect
                        selected={selected}
                        setSelected={setSelected}
                      />
                      */}
                    </div>
                  </div>
                </div>
              </div>
              {!message ? null : (
                <div className="h-full w-1/2 bg-[url('/cardbg.jpg')] shadow-lg">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="h-full">
                        <FormControl className="flex h-full">
                          <Textarea placeholder="Message" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
          </div>

          <Button type="submit" className="mx-auto bg-brand-blue text-white">
            Send!
          </Button>
        </form>
      </Form>
    </div>
  );
}

const FormSelect = ({
  selected,
  setSelected,
}: {
  selected: "company" | "individual";
  setSelected: Dispatch<SetStateAction<"company" | "individual">>;
}) => {
  return (
    <div className="h-fit w-fit overflow-hidden rounded font-medium">
      <button
        className={`${
          selected === "individual" ? "text-brand-blue" : "text-black"
        } duration-[750ms] relative px-3 py-1.5 text-sm transition-colors`}
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
          selected === "company" ? "text-brand-blue" : "text-black"
        } duration-[750ms] relative px-3 py-1.5 text-sm transition-colors`}
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
const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };
