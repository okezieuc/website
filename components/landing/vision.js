import Container from "@components/container";

export default function Vision() {
  return (
    <div class="-mt-32">
      <Container>
        <div class="bg-indigo-700 relative py-8 md:py-16 px-8 rounded-2xl flex flex-col sm:flex-row items-center">
          <div class="w-24 md:w-48 text-3xl font-bold sm:mr-8 mb-8 sm:mb-0 flex-shrink-0">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiB2aWV3Qm94PSIwIDAgMjExLjY2NyAyMTEuNjY3IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iOCIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cmVjdCB3aWR0aD0iMTU1LjgwMyIgaGVpZ2h0PSIxNTUuODAzIiB4PSI0IiB5PSI0IiByeD0iMTYiIHBhaW50LW9yZGVyPSJub3JtYWwiLz48cmVjdCB5PSI1MS44NjQiIHg9IjUxLjg2NCIgaGVpZ2h0PSIxNTUuODAzIiB3aWR0aD0iMTU1LjgwMyIgcng9IjE2IiBwYWludC1vcmRlcj0ibm9ybWFsIi8+PC9zdmc+" />
          </div>
          <div class="text-md md:text-2xl text-white">
            Our goal at Studymono is to make learning accesible. We bring
            helpful educational resources to everyone's fingertips.
          </div>
        </div>
      </Container>
    </div>
  );
}
