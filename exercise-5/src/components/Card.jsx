export default function Card({ item }) {
  const { name, hobbies, gender, address, image } = item;
  return (
    <div className="col-3">
      <div className="card text-center">
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{hobbies}</p>
          <p className="card-text">{gender}</p>
          <h5 className="card-text">{address}</h5>
        </div>
      </div>
    </div>
  );
}
