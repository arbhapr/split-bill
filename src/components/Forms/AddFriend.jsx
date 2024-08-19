import { useState } from "react";

const AddFriend = ({ onAddFriend }) => {
    const [formData, setFormData] = useState({
        name: "",
        image: `https://i.pravatar.cc/48?u=${crypto.randomUUID().toString()}`,
        balance: 0,
    });
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.name || !formData.image) return;
        const id = crypto.randomUUID().toString();
        const newFriend = {
            id,
            name: formData.name,
            image: formData.image,
            balance: formData.balance
        }
        onAddFriend(newFriend);
        setFormData({
            name: "",
            image: `https://i.pravatar.cc/48?u=${crypto.randomUUID().toString()}`,
            balance: 0
        });
    }
    
    return (
        <form action="" className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="">🧑🏼Nama</label>
            <input type="text" value={formData.name} onChange={handleChange} name="name" id="" />

            <label htmlFor="">📸Gambar</label>
            <input type="text" value={formData.image} onChange={handleChange} name="image" id="" />

            <button className="button">Tambah</button>
        </form>
    );
};

export default AddFriend;
