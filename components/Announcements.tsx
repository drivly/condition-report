import { Vehicle } from "typings";
import { OffsiteNotes, SectionTitle } from ".";

interface Props {
  vehicle: Vehicle;
}

const Announcements = ({ vehicle }: Props) => {
  const { offsiteAnnouncements: announce, offsiteRemarks: remarks } = vehicle;

  return (
    <>
      {announce.length || remarks.length ? (
        <section className="bg-white dark:bg-black-2 shadow-md py-8 px-4 lg:px-6 rounded-md">
          <SectionTitle heading="Notes" title="Comments"  />
          <div className="space-y-8">
            {announce?.length > 0 && <OffsiteNotes notes={announce} />}
            {remarks?.length > 0 && <OffsiteNotes remarks={remarks} />}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Announcements;
