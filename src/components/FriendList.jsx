import Friend from "./Friend";

const FriendList = ({ friends, onSelected, selectedFriend }) => {
    return (
        <ul>
            {friends.map((friend, index) => (
                <Friend
                    key={index}
                    friend={friend}
                    onSelected={onSelected}
                    selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    );
};

export default FriendList;
