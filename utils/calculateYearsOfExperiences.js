export default function calculateYearsOfExperience(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  const differenceInMilliseconds = now - start;
  const differenceInMonths =
    differenceInMilliseconds / (1000 * 60 * 60 * 24 * 30.4375);
  const years = Math.floor(differenceInMonths / 12);
  const remainingMonths = differenceInMonths % 12;

  return years + remainingMonths / 12;
}
