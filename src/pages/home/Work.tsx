import grabbit from "/src/assets/projects/grabbit.png";
import savvy from "/src/assets/projects/savvy.png";
import scribbly from "/src/assets/projects/scribbly.png";
import volume from "/src/assets/projects/volume.png";

function Work() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold pb-2">Work</h2>
      <p className="text-gray pb-16">
        My notable projects. Click to learn more about their design and
        development.
      </p>
      <div className="flex flex-col gap-16">
        <img
          src={grabbit}
          alt="Image of Grabbit"
          className="w-72 mx-auto cell-link"
        />
        <img
          src={volume}
          alt="Image of Volume"
          className="w-72 mx-auto cell-link"
        />
        <img
          src={scribbly}
          alt="Image of Scribbly"
          className="w-72 mx-auto cell-link"
        />
        <img
          src={savvy}
          alt="Image of Savvy"
          className="w-72 mx-auto cell-link"
        />
      </div>
    </div>
  );
}

export default Work;
