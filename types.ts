import { Dispatch, SetStateAction } from "react";

export type ICount = {
    count: number;
  }
  
 export type IQuestion = {
    question: string;
    answer: string;
  }
  
 export type IVariants = {
    variants: string[];
  }
  export type HeaderProps ={
    subjectTitle:string;
    subjectIcon:string;
    isWelcomePage?: boolean;
    isDark:boolean;
    setIsDark: (isDark: boolean) => void; 
  }
  export type AnswersProps = {
    variants: string[];
    onAnswer: (option: string) => void;
    selectedOption: string;
    isSubmitted: boolean;
    correctOption: string;
  }
  export type ResultPageProps = {
    correctAnswersCount: number;
    subjectTitle: string;
    subjectIcon: string;
    onRestartQuiz: () => void; 
}
export type WelcomePageProps = {
  userChoise: string;
  onRadioButton:React.ChangeEventHandler<HTMLInputElement>
  setSelectedSubjectIcon:React.Dispatch<React.SetStateAction<string>>;
}

export type FormProps = {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>; 
}

export type QuestionsProps ={
  subjectTitle: string;
  onComplete: (correctAnswers: number) => void;
}