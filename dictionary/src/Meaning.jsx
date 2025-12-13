import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  const meaning = props.meaning;

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition"> {definition.definition}</div>

            <div className="example">{definition.example}</div>

            <strong>Synonyms:</strong>
            <Synonyms synonyms={meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
