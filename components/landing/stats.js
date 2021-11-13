import Container from "@components/container";

export default function Stats() {
  return (
    <Container>
      <div class="text-center md:text-left flex flex-col md:flex-row items-center mt-24">
        <div class="flex-grow md:mr-12">
          <h2 class="font-heading text-4xl md:text-5xl font-bold">
            <span class="text-indigo-700">We mean it</span> when we say we have
            resources
          </h2>
          <div class="w-64 md:w-72 h-72 md:h-76 mx-auto md:hidden my-4">
            <img
              class="mx-auto"
              src="/stats.svg"
              alt="Infographics showing the quality of resources available on Studymono"
            />
          </div>
          <div class="text-md md:text-2xl sm:mt-4 md:mt-0">
            Featuring a catalog of over 500 WAEC and JAMB questions in
            Mathematics, Physics, Chemistry and other subjects, Studymono is
            ready to provide you with your academic needs.
          </div>
        </div>
        <div class="w-76 h-76 hidden md:block">
          <img
            class="mx-auto"
            src="/stats.svg"
            alt="Infographics showing the quality of resources available on Studymono"
          />
        </div>
      </div>
    </Container>
  );
}
