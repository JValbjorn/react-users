import UserCard from "./UserCard";

function UserList() {
    return (
        <div>
            {User.map(User =>(
                <UserCard user={user} key={user.id} />
            ))}
        </div>
    );
}
export default UserList;    