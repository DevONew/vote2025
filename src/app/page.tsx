import ElectionTurnoutCard from "./components/ui/ElectionTurnoutCard";
import RegionTurnout from "./components/ui/RegionTurnout";
import CandidateCard from "./components/ui/CandidateCard";
import { candidateMeta } from "@/constants/candidateMeta";
import CartogramRegion from "./components/catogram/CatogramRegion";
export default function Page() {
  const meta = candidateMeta["이재명"];

  return (
    <div className="p-8">

      <div className="flex gap-8">
        {/* 왼쪽: 지도 */}
        <div className="w-[1000px]">
          <CartogramRegion />
        </div>

        {/* 오른쪽: 정보 카드 */}
        <div className="w-[300px] flex flex-col gap-4">
          <ElectionTurnoutCard />
          <RegionTurnout />
          <CandidateCard src={meta.image} partyColor={meta.partyColor} />
        </div>
      </div>
    </div>
  );
}
