import Circles from "../../components/Circles/Circles"
import Bulb from "../../components/Bulb/Bulb"
import { BsCaretUpFill, BsSend } from "react-icons/bs"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const fullNameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*(?:\s[a-zA-Z]+(?:-[a-zA-Z]+)*)*$/
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const schema = yup.object().shape({
    fullName: yup.string().required("Field is required.").matches(fullNameRegex, "Field is invalid."),
    email: yup.string().required("Field is required.").matches(emailRegex, "Field is invalid."),
    subject: yup.string().required("Field is required."),
    message: yup.string().required("Field is required."),
})

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            fullName: "",
            email: "",
            subject: "",
            message: "",
        }
    });

    const sendEmail = async (name, email, subject, message) => {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message }),
        });
        if (response.ok) {
            toast.success("Submitted successfully!"), { toastId: "form-submit-success" }
            reset()
        }
        if (!response.ok) {
            toast.error("Failed to connect!"), { toastId: "email-submit-fail" }
            throw new Error('Failed to send email');
        }

        return response.json();
    }

    const onSubmit = async (data) => {
        const { fullName, email, subject, message } = data
        try {
            await sendEmail(fullName, email, subject, message);
        } catch (error) {
            toast.error("Failed to submit!"), { toastId: "form-submit-fail" }
        }
    }

    return (
        <div className="min-h-screen dark:bg-primary/30 bg-gradient-to-r dark:bg-none from-primaryLight via-primaryLight/60 to-primaryLight/10 bg-primaryLight/60 overflow-y-auto overflow-x-hidden xl:overflow-hidden flex items-center justify-center">
            <div className="container mx-auto max-h-[calc(100vh-14rem)] sm:max-h-none overflow-y-auto sm:py-32 text-center xl:text-left sm:flex items-center justify-center">
                <div className="flex flex-col w-full max-w-[700px]">
                    <Circles />
                    <motion.h2
                        variants={fadeIn("down", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        key="contact-header"
                        className="h2 text-center mb-2 xl:mb-6">
                        Contact me<span className="text-accentLight dark:text-accent">.</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        key="contact-paragraph"
                        className="text-center text-sm md:text-base mb-4 xl:mb-6">
                        Contact me directly at <a href="mailto:berkaybideci@gmail.com" className="underline font-medium">berkaybideci@gmail.com</a> or through this form.
                    </motion.p>
                    <motion.form
                        variants={fadeIn("up", 0.7)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        key="contact-form"
                        className="flex-1 flex flex-col gap-2 xl:gap-6 w-full mx-auto"
                        onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-x-2 xl:gap-x-6 w-full">
                            <div className="w-1/2">
                                <input {...register("fullName")} type="text" name="fullName" placeholder="Full name" className="input" />
                                {errors.fullName?.message ?
                                    <div className="flex justify-end items-center gap-x-1 text-sm text-end italic font-bold mt-2 text-accentLight dark:text-accent">
                                        <BsCaretUpFill />
                                        <span className="">{errors.fullName.message}</span>
                                    </div>
                                    : null}
                            </div>
                            <div className="w-1/2">
                                <input {...register("email")} type="text" name="email" placeholder="email" className="input" />
                                {errors.email?.message ?
                                    <div className="flex justify-end items-center gap-x-1 text-sm text-end italic font-bold mt-2 text-accentLight dark:text-accent">
                                        <BsCaretUpFill />
                                        <span className="">{errors.email.message}</span>
                                    </div>
                                    : null}
                            </div>
                        </div>
                        <div>
                            <input {...register("subject")} type="text" name="subject" placeholder="subject" className="input" />
                            {errors.subject?.message ?
                                <div className="flex justify-end items-center gap-x-1 text-sm text-end italic font-bold mt-2 text-accentLight dark:text-accent">
                                    <BsCaretUpFill />
                                    <span className="">{errors.subject.message}</span>
                                </div>
                                : null}
                        </div>
                        <div>
                            <textarea {...register("message")} name="message" placeholder="message" className="textarea"></textarea>
                            {errors.message?.message ?
                                <div className="flex justify-end items-center gap-x-1 text-sm text-end italic font-bold text-accentLight dark:text-accent">
                                    <BsCaretUpFill />
                                    <span className="">{errors.message.message}</span>
                                </div>
                                : null}
                        </div>
                        <button type="submit" className="btn rounded-full border border-black/60 dark:border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accentLight dark:hover:border-accent group relative">
                            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                Submit
                            </span>
                            <BsSend className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                        </button>
                    </motion.form>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored" />
                    <Bulb />
                </div>
            </div>
        </div>
    )
};

export default Contact;
