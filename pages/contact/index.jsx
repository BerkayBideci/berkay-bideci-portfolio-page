import Circles from "../../components/Circles/Circles"
import Bulb from "../../components/Bulb/Bulb"
import { BsArrowRight } from "react-icons/bs"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import { useState } from "react"

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = async (name, email, subject, message) => {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message }),
        });

        if (!response.ok) {
            throw new Error('Failed to send email');
        }

        return response.json();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await sendEmail(name, email, subject, message);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="h-full bg-primaryLight/60 dark:bg-primary/30">
            <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
                <div className="flex flex-col w-full max-w-[700px]">
                    <Circles />
                    <motion.h2
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2 text-center mb-6">
                        Contact me<span className="text-accentLight dark:text-accent">.</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="text-center mb-6">
                        Contact me directly at <a href="mailto:berkaybideci@gmail.com" className="underline font-medium">berkaybideci@gmail.com</a> or through this form.
                    </motion.p>
                    <motion.form
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="flex-1 flex flex-col gap-6 w-full mx-auto"
                        onSubmit={handleSubmit}>
                        <div className="flex gap-x-6 w-full">
                            <input type="text" name="name" placeholder="name" className="input" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" name="email" placeholder="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <input type="text" name="subject" placeholder="subject" className="input" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <textarea name="message" placeholder="message" className="textarea" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button type="submit" className="btn rounded-full border border-black/60 dark:border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accentLight dark:hover:border-accent group">
                            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                Submit
                            </span>
                            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                        </button>
                    </motion.form>
                    <Bulb />
                </div>
            </div>
        </div>
    )
};

export default Contact;
