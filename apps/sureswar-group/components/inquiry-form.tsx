"use client";

import { useState, type FormEvent } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";

export function InquiryForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(false);
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      );
      form.reset();
      setSent(true);
    } catch {
      setError("Something went wrong sending your inquiry. Please try again or contact us directly.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <Alert severity="success" variant="outlined" sx={{ maxWidth: "xl", borderRadius: 3 }}>
        Thank you. Your inquiry has been sent — our team will get back to you shortly.
      </Alert>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 560 }}>
      <Stack spacing={3}>
        <TextField
          id="inquiry-name"
          name="name"
          label="Name"
          required
          fullWidth
          variant="outlined"
        />

        <TextField
          id="inquiry-email"
          name="email"
          label="Email"
          type="email"
          required
          fullWidth
          variant="outlined"
        />

        <TextField
          id="inquiry-company"
          name="company"
          label="Company / unit (optional)"
          placeholder="e.g. Sadi Corporation, Holiday Express"
          fullWidth
          variant="outlined"
        />

        <TextField
          id="inquiry-message"
          name="message"
          label="Message"
          required
          fullWidth
          multiline
          rows={5}
          variant="outlined"
        />

        {error ? <Alert severity="error">{error}</Alert> : null}

        <Button
          type="submit"
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
          disabled={sending}
          sx={{ alignSelf: "flex-start", borderRadius: 99, px: 4 }}
        >
          {sending ? "Sending..." : "Send inquiry"}
        </Button>
      </Stack>
    </Box>
  );
}
