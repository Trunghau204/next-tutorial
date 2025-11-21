import { notFound } from "next/navigation";

function getRandomInt(coutnt: number) {
  return Math.floor(Math.random() * coutnt);
}
export default function ProductReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Random error occurred");
  }
  const { productId, reviewId } = params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
