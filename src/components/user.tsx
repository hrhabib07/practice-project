type TUser = {
  name: string;
  email: string;
  age: number;
  isRegistered: boolean;
};

const User = (props: TUser) => {
  return (
    <div>
      <h1>Hello, From User!</h1>
      <p className="">Name: {props.name}</p>
      <p className="">Email: {props.email}</p>
      <p className="">Age: {props.age}</p>
      <p className="">
        Is Registered : {props.isRegistered ? "registered" : "not registered"}
      </p>
    </div>
  );
};

export default User;
