type User1 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User1>) {}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});