function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Welcome to</h1>
        <h1 className="text-7xl text-[var(--clr-primary)]">
          Saturday Scrum
          <span className="text-[var(--clr-secondary)]"> Live!</span>
        </h1>
        <h2 className="mt-5 text-xl">
          Weekly blog about my journey towards{" "}
          <span className="underline decoration-4 decoration-[var(--clr-yellow)]">
            {" "}
            understanding scrum
          </span>
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-[var(--clr-primary)] max-w-sm">
        <span className="text-[var(--clr-yellow)]">Scrum</span> concepts |
        values | mastery | in practice | certification & More!
      </p>
    </div>
  );
}
export default Banner;
