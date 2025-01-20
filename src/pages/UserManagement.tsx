import { UserList } from "../components/UserList";
import { UserForm } from "../components/UserForm";
import { Container, Typography } from "@mui/material";

export const UserManagement = () => {
  return (
    <Container>
      <Typography variant="h4" my={2}>User Management</Typography>
      <UserForm />
      <UserList />
    </Container>
  );
};
