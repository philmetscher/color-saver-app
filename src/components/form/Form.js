import "./Form.css";

export default function Form() {
  return (
    <form className="card form-card">
      <input className="card-code card-code__input" type="color" />
      <input className="card-code card-code__hex" placeholder="#000000" />
      <button type="submit">ADD</button>
    </form>
  );
}
