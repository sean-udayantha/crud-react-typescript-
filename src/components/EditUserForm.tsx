import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { User } from "../types/user";
import { Button, TextField, Box, DialogTitle, DialogContent, DialogActions } from "@mui/material";

interface EditUserFormProps {
  user: User;
  onClose: () => void;
}

export const EditUserForm = ({ user, onClose }: EditUserFormProps) => {
  const { updateUser } = useUsers();
  const [form, setForm] = useState({ userId: user.userId=1 , title: user.title, body: user.body });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateUser.mutate({ id: user.id, user: form });
    onClose();
  };

  return (
    <>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} my={2}>
          <TextField label="Title" name="title" value={form.title} onChange={handleChange} />
          <TextField label="Body" name="body" value={form.body} onChange={handleChange} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>Update</Button>
      </DialogActions>
    </>
  );
};
