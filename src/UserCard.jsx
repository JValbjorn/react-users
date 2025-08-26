function UserCard() {
    return (<div>
<img src={User.image} alt={User.name} />
<p>{User.name}</p>
<p>{User.mail}</p>
<p>{User.title}</p>
    </div>
    );
}
export default UserCard;