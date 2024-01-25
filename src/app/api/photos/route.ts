import { faker } from "@faker-js/faker";

const amount = 10;

export function GET(response: Response) {
  const data = Array.from({ length: amount }).map((_, i) => {
    return {
      id: i,
      url: `https://source.unsplash.com/random/200x200/?sig=${i}`,
      title: `${faker.commerce.productName()}`,
    };
  });

  return Response.json(data);
}
