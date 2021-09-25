import Container from "@components/container";

export default function Quote() {
  return (
    <div class="bg-gray-100 mt-32 md:mt-48 py-20 md:py-32">
      <Container>
        <div class="flex flex-col md:flex-row">
          <div class="w-15 md:w-72 flex-shrink-0">
            <h2 class="font-heading text-2xl md:text-3xl font-bold">Why we built Studymono</h2>
          </div>
          <div class="flex-grow md:ml-8">
            <p class="text-md md:text-2xl">
              We did not create Studymono to be a replacement for textbooks. Why
              would we do such? Studymono is a supplementary material for
              solving questions of your choice in preparation for WAEC, JAMB and
              higher education.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
