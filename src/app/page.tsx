'use client';
import ElectionTurnoutCard from "./components/ui/ElectionTurnoutCard";
import RegionTurnout from "./components/ui/RegionTurnout";
import CandidateCard from "./components/ui/CandidateCard";
import { candidateMeta } from "@/constants/candidateMeta";
import CartogramRegion from "./components/catogram/CatogramRegion";
import { useElectionData } from "@/hook/useElectionData";

export default function Page() {
  const meta = candidateMeta["이재명"];
  const { data, loading, error } = useElectionData();

  // 콘솔에 데이터 출력하여 확인
  console.log('[Page] 선거 데이터:', data);
  console.log('[Page] 로딩 상태:', loading);
  console.log('[Page] 에러:', error);

  if (loading) {
    return <div className="p-8 text-center">데이터 로딩 중...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-600">{error}</div>;
  }

  return (
    <div className="p-8">

      <div className="flex gap-8">
        {/* 왼쪽: 지도 */}
        <div className="w-[1000px]">
          <CartogramRegion electionData={data} />
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
