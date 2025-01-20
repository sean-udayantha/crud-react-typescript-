import { useQuery, useMutation, useQueryClient } from "react-query";
import { userService } from "../services/userService";
import { User } from "../types/user";

export const useUsers = () => {
  const queryClient = useQueryClient();

  const { data: users, isLoading } = useQuery<User[]>("users", userService.getUsers);

  const createUser = useMutation(userService.createUser, {
    onSuccess: () => queryClient.invalidateQueries("users"),
  });

  const updateUser = useMutation(({ id, user }: { id: number; user: Omit<User, "id"> }) =>
    userService.updateUser(id, user), {
    onSuccess: () => queryClient.invalidateQueries("users"),
  });

  const deleteUser = useMutation(userService.deleteUser, {
    onSuccess: () => queryClient.invalidateQueries("users"),
  });

  return { users, isLoading, createUser, updateUser, deleteUser };
};
