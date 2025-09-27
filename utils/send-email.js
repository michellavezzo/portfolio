// https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644

export async function sendEmail(data) {
    const { name, email, subject, message } = data || {}
    if (!name || !email || !subject || !message) {
        throw new Error("Missing required fields")
    }

    const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
    })

    const contentType = res.headers.get("content-type") || ""
    if (!res.ok) {
        const body = contentType.includes("application/json")
            ? await res.json().catch(() => ({}))
            : await res.text().catch(() => "")
        const msg =
            typeof body === "object" && body.error
                ? body.error
                : `Request failed: ${res.status} ${res.statusText}${
                      body ? ` - ${String(body).slice(0, 200)}` : ""
                  }`
        throw new Error(msg)
    }

    return contentType.includes("application/json")
        ? res.json()
        : { message: await res.text() }
}
