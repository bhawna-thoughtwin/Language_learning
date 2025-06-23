const QuestionComponent = ({ question, onAnswer, selected }) => {
    const style = question.content.style || "basic";
  
    if (question.type === "multiple-choice") {
      if (style === "with-letter") {
        return <MultipleChoiceWithLetter question={question} onAnswer={onAnswer} selected={selected} />;
      } else {
        return <MultipleChoiceBasic question={question} onAnswer={onAnswer} selected={selected} />;
      }
    }
  
    return <div>Unknown type</div>;
  };
  