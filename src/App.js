import "./App.css";
import { useState } from "react";

function App() {
  const initData = [
    {
      title: "테라",
      img: "img/tr.png"
    },

    {
      title: "진로",
      img: "img/진로.jpeg",
    },

    {
      title: "하이트",
      img: "img/love.jpeg",
    },

    {
      title: "카스",
      img: "img/cass.jpeg",
    },
  ];

  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <header>
        <h1 className="title">고량주</h1>
      </header>

      <main>
        <div className="sidebar">
          <button
            type="button"
            className="add_button"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            추가
          </button>
          {data.map((item) => (
            <span key={item.date}>{item.title}</span>
          ))}
        </div>
        <article className="article">
          {data.map((item) => (
            <section className="card" key={item.date}>
              <img src={item.img} alt={item.title}></img>
            </section>
          ))}
        </article>
      </main>

      <Modal
        handleAddItem={handleAddItem}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}

export default App;