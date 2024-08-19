import { useState } from "react";

const SplitBill = ({ friend, onSplitBill }) => {
    const [amount, setAmount] = useState(0);
    const [myBill, setMyBill] = useState(0);
    const [paidBy, setPaidBy] = useState("user");
    const friendBill = amount ? amount - myBill : 0;
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!amount || !myBill) return;
        onSplitBill(paidBy === "user" ? friendBill : -myBill)
        setAmount(0);
        setMyBill(0);
    }

    return (
        <form action="" className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Patungan Bareng si {friend?.name}</h2>

            <label htmlFor="">💸Total Tagihan</label>
            <input
                type="text"
                name=""
                id=""
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <label htmlFor="">🧑🏼Tagihan Kamu</label>
            <input
                type="text"
                name=""
                id=""
                value={myBill}
                onChange={(e) => setMyBill(e.target.value)}
            />

            <label htmlFor="">👦🏼Tagihan {friend?.name}</label>
            <input type="text" name="" id="" value={friendBill} disabled />

            <label htmlFor="">💵Ditalangin sama</label>
            <select name="" id="" onChange={(e) => setPaidBy(e.target.value)}>
                <option value="user">Kamu</option>
                <option value="friend">{friend?.name}</option>
            </select>

            <button className="button">Tambah</button>
        </form>
    );
};

export default SplitBill;
