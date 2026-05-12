"use client";

import { useState, type FormEvent } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

export function InquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <Alert severity="success" variant="outlined" sx={{ maxWidth: "xl", borderRadius: 3 }}>
        Thank you. Your inquiry has been recorded for this demo. Connect a backend or email service
        to deliver messages to your team.
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

        <Button
          type="submit"
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
          sx={{ alignSelf: "flex-start", borderRadius: 99, px: 4 }}
        >
          Send inquiry
        </Button>
      </Stack>
    </Box>
  );
}
