import BlockContent from "../blockContent";

export default function Answer({ answer, explanation }) {
  return (
    <div class="border border-indigo-700">
      <div class="flex border-b border-indigo-700">
        {answer ? (
          <>
            <div class="bg-indigo-700 flex-1 pl-4 py-2 text-white">
              Correct answer
            </div>
            <div class="px-4 py-2 font-semibold">{answer}</div>
          </>
        ) : (
          <div class="bg-indigo-700 flex-1 pl-4 py-2 text-white">
            Answer unavailable
          </div>
        )}
      </div>
      <div class="p-4 text-xl">
        {explanation ? (
          <BlockContent body={explanation} />
        ) : (
          "No explanation provided right now."
        )}
      </div>
    </div>
  );
}
