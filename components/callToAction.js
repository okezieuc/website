import Container from "@components/container";

export default function CallToAction() {
  return (
    <div class="bg-indigo-700 py-3 sm:py-8 md:py-12">
      <Container>
        <h3 class="text-lg sm:text-3xl md:text-4xl text-white">
          We're building the revolutionary educational platform for Nigerian
          students
        </h3>
        <div class="bg-white rounded-2xl px-4 py-2 w-max mt-2 max-w-full">
          <a>Newsletter starts September ending</a>
        </div>
      </Container>
    </div>
  );
}
