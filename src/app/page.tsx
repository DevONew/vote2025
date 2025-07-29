import ElectionTurnoutCard from "./components/ui/ElectionTurnoutCard";
import RegionTurnout from "./components/ui/RegionTurnout";
import CandidateCard from "./components/ui/CandidateCard";
import { candidateMeta } from "@/constants/candidateMeta";
export default function Page() {
  const meta = candidateMeta["이재명"];

  return (
    <>
      <h1 className="text-3xl font-bold ">ssh 방식으로 바꾸는중</h1>
      <ElectionTurnoutCard/>
      <div className="w-[300px]">
        <RegionTurnout/>
        <CandidateCard src={meta.image} partyColor={meta.partyColor}/>
      </div>
    </>
  );
}
