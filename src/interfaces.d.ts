export interface Quiz {
  questions: QuestionData[];
  quizId: string;
  userId: string;
  username: string;
}

export interface QuestionData {
  name: string;
  question: string;
  answer: string;
  location: QuestionCoords;
  success?: boolean;
}

export interface QuestionCoords {
  longitude: string;
  latitude: string;
}

export interface CoordsProps {
  latitude: number;
  longitude: number;
}

export interface FormQuizProps {
  quiz: string;
}

export interface ApiLoginResponse {
  success: boolean;
  message?: string;
  token?: string;
}

export interface ApiSignUpResponse {
  success: boolean;
  message?: string;
}

export type setState<T> = React.Dispatch<React.SetStateAction<T>>;
