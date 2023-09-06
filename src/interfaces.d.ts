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
}

export interface QuestionCoords {
  longitude: string;
  latitude: string;
}
export interface CoordsProps {
  lat: number;
  lon: number;
}
