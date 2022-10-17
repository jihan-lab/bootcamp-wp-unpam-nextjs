export default function Card({ id, title, subTitle, desc, link1, link2 }) {
  return (
    <>
      <div id={id}>
        <br></br>
        <div className="card mt-5 bg-light shadow-lg" style={{ width: 700 }}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{subTitle}</h6>
            <p className="card-text">{desc}</p>
            <a href="#" className="card-link">
              {link1}
            </a>
            <a href="#" className="card-link">
              {link2}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
