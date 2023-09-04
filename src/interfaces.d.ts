export interface CoordsProps {
  lat: number;
  lon: number;
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
