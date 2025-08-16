import { useTranslations } from "next-intl";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { Accordions, Question } from "@/app/_ui/Accordion";

function QuestionSc() {
  const t = useTranslations("About_Page.Questions_Sc");

  const questionsData = t.raw("Questions");

  const questions = Object.keys(questionsData).map((key) => ({
    question: questionsData[key].question,
    answer: questionsData[key].answer,
  }));

  return (
    <div className="flex w-full items-center justify-center mt-5 pt-5 border-t-2 border-white/20 flex-col">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        className="flex items-center justify-start gap-2 w-fit flex-row border-b-2 border-white/50 pb-2 mb-5"
      >
        <BsFillPatchQuestionFill size={30} className="text-primary" />
        <h1 className="text-3xl font-bold ">{t("title")}</h1>
      </div>
      <Accordions>
        {questions.map((item, i) => (
          <Question
            key={i}
            question={item.question}
            answer={item.answer}
            isDefaultOpen={i === 0}
          />
        ))}
      </Accordions>
    </div>
  );
}

export default QuestionSc;
