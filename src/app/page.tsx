'use client';
import { useState } from "react";
import ElectionTurnoutCard from "./components/ui/ElectionTurnoutCard";
import RegionTurnout from "./components/ui/RegionTurnout";
import CandidateCard from "./components/ui/CandidateCard";
import { candidateMeta } from "@/constants/candidateMeta";
import CartogramRegion from "./components/catogram/CatogramRegion";
import { useElectionData } from "@/hook/useElectionData";

export default function Page() {
  const { data, loading, error } = useElectionData();

  // 호버된 지역 ID 상태 관리
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

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

  // 호버된 지역의 데이터 찾기
  const hoveredRegionData = hoveredRegionId
    ? data.find((item) => {
        const fullName = item.sdName + item.cityName;
        return fullName.includes(hoveredRegionId) || hoveredRegionId.includes(item.cityName);
      })
    : null;

  // 표시할 지역 데이터 (호버된 지역이 있으면 그것, 없으면 전국 합계)
  const displayData = hoveredRegionData || data.find((item) => item.cityName === '합계');

  // 1위 후보 찾기
  const candidates = displayData
    ? [
        { name: displayData.hbj01, vote: displayData.vote01, count: displayData.dugsu01, party: displayData.jd01 },
        { name: displayData.hbj02, vote: displayData.vote02, count: displayData.dugsu02, party: displayData.jd02 },
        { name: displayData.hbj03, vote: displayData.vote03, count: displayData.dugsu03, party: displayData.jd03 },
      ].sort((a, b) => b.vote - a.vote)
    : [];

  const winner = candidates[0];
  const winnerMeta = winner ? candidateMeta[winner.name as keyof typeof candidateMeta] : candidateMeta["이재명"];

  return (
    <div className="p-8">

      <div className="flex gap-8">
        {/* 왼쪽: 지도 */}
        <div className="w-[1000px]">
          <CartogramRegion
            electionData={data}
            onRegionHover={setHoveredRegionId}
          />
        </div>

        {/* 오른쪽: 정보 카드 */}
        <div className="w-[300px] flex flex-col gap-4">
          <ElectionTurnoutCard />
          <RegionTurnout
            regionName={displayData ? `${displayData.sdName} ${displayData.cityName}` : '전국'}
            totalVotes={displayData?.tusu || 0}
            turnout={displayData?.turnout || 0}
          />
          <CandidateCard
            src={winnerMeta.image}
            partyColor={winnerMeta.partyColor}
            candidateName={winner?.name || '이재명'}
            partyName={winner?.party || '더불어민주당'}
            votePercentage={winner?.vote || 0}
            voteCount={winner?.count || 0}
          />
        </div>
      </div>
    </div>
  );
}
