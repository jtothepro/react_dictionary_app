export default function Phoenetics(props) {
  return (
    <div className="Phoenetics">
      <p>
        {props.phonetics.text}{" "}
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </p>
    </div>
  );
}
