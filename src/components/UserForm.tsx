import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { Button, TextField, Box } from "@mui/material";

export const UserForm = () => {
  const { createUser } = useUsers();
  const [form, setForm] = useState({ userId: 1, title: "", body: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createUser.mutate(form);
    setForm({ userId: 1, title: "", body: "" });
  };

  return (
    <Box display="flex" gap={2} my={2}>
      <TextField label="Title" name="title" value={form.title} onChange={handleChange} />
      <TextField label="Body" name="body" value={form.body} onChange={handleChange} />
      <Button variant="contained" onClick={handleSubmit}>Add User</Button>
    </Box>
  );
};
