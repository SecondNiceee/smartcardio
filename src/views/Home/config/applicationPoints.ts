export interface ApplicationPoint {
  image: string;
  title: string;
  description: string;
}

export const applicationPoints: ApplicationPoint[] = [
  {
    image: "howto-applic-ankle.webp",
    title: "Лодыжка левой ноги",
    description:
      "Приложите прибор к лодыжке для быстрой регистрации показателей.",
  },
  {
    image: "howto-applic-knee.webp",
    title: "Колено левой ноги",
    description:
      "Для комфортной записи из положения сидя разместите прибор на колене левой ноги.",
  },
  {
    image: "howto-applic-stomach.webp",
    title: "Левая область живота",
    description:
      "Положение прибора в левой области живота позволяет измерять не только основные показатели, но и дыхательные движения.",
  },
];

export const applicationImages = applicationPoints.map((point) => point.image);
