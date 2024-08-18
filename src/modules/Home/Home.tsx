import Modal from "@/core/components/Modal/Modal";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h1 className="text-xl font-black">Bookmark Saver</h1>
      </Modal>
    </div>
  );
};

export default Home;
