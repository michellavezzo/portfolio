import nodemailer from "nodemailer"

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"])
        return res.status(405).json({ error: "Method Not Allowed" })
    }

    try {
        const { email, name, subject, message } = req.body || {}
        if (!email || !name || !subject || !message) {
            return res.status(400).json({ error: "Missing required fields" })
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD, // use an App Password for Gmail
            },
        })

        await transporter.sendMail({
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            replyTo: email,
            subject: `Website Message - ${name} (${email}) - ${subject}`,
            text: message,
        })

        return res.status(200).json({ message: "Email sent" })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ error: "Failed to send email" })
    }
}
