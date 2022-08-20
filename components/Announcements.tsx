import { Vehicle } from "typings";
import { OffsiteNotes } from ".";

interface Props {
  vehicle: Vehicle;
}

const Announcements = ({ vehicle }: Props) => {
  const { offsiteAnnouncements: announce, offsiteRemarks: remarks } = vehicle;

  return (
    <>
      {announce.length || remarks.length ? (
        <section>
          <h3 className="uppercase text-gray-6 tracking-widest font-medium text-sm">
            Announcements
          </h3>
          <h3 className="flex dark:text-gray-1 text-dark-1 text-3xl font-bold leading-normal md:leading-normal whitespace-nowrap mb-4">
            Notes
          </h3>
          <div className="mb-8 space-y-8">
            {announce?.length > 0 && <OffsiteNotes notes={announce} />}
            {remarks?.length > 0 && <OffsiteNotes remarks={remarks} />}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Announcements;
