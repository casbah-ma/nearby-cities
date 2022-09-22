import NearbyCities from "../components/NearbyCities";

export default function Home() {
  return (
    <div className="w-full h-full">
      <NearbyCities
        latitude={35.775781158640214}
        longitude={-5.796029414390299}
      />
    </div>
  );
}
