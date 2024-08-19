import { useState } from "react";
import { FormAddFriend, FriendList, SplitBill } from "./components";

const initialFriends = [
    {
        id: 1,
        name: "John",
        image: "https://i.pravatar.cc/48?u=john",
        balance: 1000,
    },
    {
        id: 2,
        name: "Jane",
        image: "https://i.pravatar.cc/48?u=jane",
        balance: 0,
    },
    {
        id: 3,
        name: "Alice",
        image: "https://i.pravatar.cc/48?u=alice",
        balance: 800,
    },
    {
        id: 4,
        name: "Bob",
        image: "https://i.pravatar.cc/48?u=bob",
        balance: -1500,
    },
];

const App = () => {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleToggleAddFriend() {
        setShowAddFriend((showAddFriend) => !showAddFriend);
        setSelectedFriend(null);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
    }

    function handleSelectedFriend(friend) {
        setSelectedFriend((selected) =>
            selected?.id === friend.id ? null : friend
        );
        setShowAddFriend(false);
    }

    function handleSplitBill(value) {
        setFriends(
            friends.map((friend) => {
                if (friend.id === selectedFriend?.id) {
                    return {
                        ...friend,
                        balance: friend.balance + value,
                    };
                }
                return friend;
            })
        );
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendList
                    friends={friends}
                    onSelected={handleSelectedFriend}
                    selectedFriend={selectedFriend}
                />
                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}
                <button className="button" onClick={handleToggleAddFriend}>
                    {showAddFriend ? "Tutup" : "Tambah Teman"}
                </button>
            </div>
            {selectedFriend && <SplitBill friend={selectedFriend} onSplitBill={handleSplitBill} />}
        </div>
    );
};

export default App;
