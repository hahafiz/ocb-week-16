import Card from "./components/Card";

// const user = {
//   name: "Meow",
//   avatar: "https://i.imgur.com/yXOvdOSs.jpg",
//   city: "Seattle",
//   follower: 1234,
//   following: 4321,
//   education: {
//     primary: "SK Megah Ria",
//     secondary: "SMK Seri Kota Puteri 2",
//   },
// };

const users = [
  {
    id: 1,
    name: "Meow",
    avatar: "https://i.imgur.com/yXOvdOSs.jpg",
    city: "Seattle",
    follower: 1234,
    following: 4321,
    education: {
      primary: "SK Megah Ria",
      secondary: "SMK Seri Kota Puteri 2",
    },
    active: true,
  },
  {
    id: 2,
    name: "iamapanda",
    avatar: "https://i.imgur.com/yXOvdOSs.jpg",
    city: "Seattle",
    follower: 1234,
    following: 4321,
    education: {
      primary: "SK Megah Ria",
      secondary: "SMK Seri Kota Puteri 2",
    },
    active: false,
  },
  {
    id: 3,
    name: "roarrr",
    avatar: "https://i.imgur.com/yXOvdOSs.jpg",
    city: "Seattle",
    follower: 1234,
    following: 4321,
    education: {
      primary: "SK Megah Ria",
      secondary: "SMK Seri Kota Puteri 2",
    },
    active: true,
  },
  {
    id: 4,
    name: "purrrr",
    avatar: "https://i.imgur.com/yXOvdOSs.jpg",
    city: "Seattle",
    follower: 1234,
    following: 4321,
    education: {
      primary: "SK Megah Ria",
      secondary: "SMK Seri Kota Puteri 2",
    },
    active: false,
  },
  {
    id: 5,
    name: "wooofff",
    avatar: "https://i.imgur.com/yXOvdOSs.jpg",
    city: "Seattle",
    follower: 1234,
    following: 4321,
    education: {
      primary: "SK Megah Ria",
      secondary: "SMK Seri Kota Puteri 2",
    },
    active: true,
  },
];

function App() {
  return (
    <>
      {/* <Card user={user} /> */}
      {users.map((user) => {
        return <Card user={user} hidden={!user.active} key={user.id} />;
      })}
    </>
  );
}

export default App;
