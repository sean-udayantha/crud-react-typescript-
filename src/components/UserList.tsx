import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { CircularProgress, Button, Table, TableBody, TableCell, TableHead, TableRow, Dialog } from "@mui/material";
import { User } from "../types/user";
import { EditUserForm } from "./EditUserForm";

export const UserList = () => {
    const { users, isLoading, deleteUser } = useUsers();
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (isLoading) return <CircularProgress />;

  return (
    <>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>title</TableCell>
          <TableCell>body</TableCell>
          <TableCell>Actions</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {users?.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.body}</TableCell>
            <TableCell>
            <Button color="primary" onClick={() => setSelectedUser(user)}>Edit</Button>
            <Button color="error" onClick={() => deleteUser.mutate(user.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Dialog open={!!selectedUser} onClose={() => setSelectedUser(null)}>
        {selectedUser && <EditUserForm user={selectedUser} onClose={() => setSelectedUser(null)} />}
      </Dialog>
    </>
  );
};
