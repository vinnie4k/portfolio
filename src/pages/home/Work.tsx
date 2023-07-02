import grabbit from "/src/assets/projects/grabbit.png";
import savvy from "/src/assets/projects/savvy.png";
import scribbly from "/src/assets/projects/scribbly.png";
import volume from "/src/assets/projects/volume.png";

function Work() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold pb-2 sm:text-4xl lg:text-5xl">Work</h2>
      <p className="text-gray pb-16 lg:text-xl">
        My notable projects. Click to learn more about their design and
        development.
      </p>
      <div className="flex flex-col max-sm:gap-16 max-sm:items-center sm:flex-row sm:gap-8 sm:justify-center">
        <div className="flex flex-col max-sm:gap-16 sm:gap-8">
          <a href="/work/grabbit" className="w-72 lg:w-96">
            <img src={grabbit} alt="Image of Grabbit" className="cell-link" />
          </a>
          <a href="/work/volume" className="w-72 lg:w-96">
            <img src={volume} alt="Image of Volume" className="cell-link" />
          </a>
        </div>
        <div className="flex flex-col max-sm:gap-16 sm:gap-8">
          <a href="/work/savvy" className="w-72 lg:w-96">
            <img src={savvy} alt="Image of Savvy" className="cell-link" />
          </a>
          <a href="/work/scribbly" className="w-72 lg:w-96">
            <img src={scribbly} alt="Image of Scribbly" className="cell-link" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
