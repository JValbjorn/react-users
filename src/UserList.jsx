import UserCard from "./UserCard";

function UserList({users, handleDeleteUser}) {

    return (
        <div>
            {users.map(user =>(
                <UserCard user={user} key={user.id} onDelete={handleDeleteUser}  />
            ))}
        </div>
    );
}
export default UserList;    