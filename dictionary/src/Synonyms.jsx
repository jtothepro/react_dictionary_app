import "./Synonyms.css";

export default function Synonyms(props) {
  const synonyms = props.synonyms;

  if (synonyms && synonyms.length > 0) {
    return (
      <ul className="Synonyms">
        {synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
