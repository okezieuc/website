import BlockContent from "../blockContent";

export default function Option({ option, value }) {
  return (
    <div class="flex my-4 md:my-6">
      <div class="mr-4">{option}.</div>
      <p class="text-xl md:text-2xl">
        <BlockContent body={value} />
      </p>
    </div>
  );
}
