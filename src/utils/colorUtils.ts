import { candidateMeta } from '@/constants/candidateMeta';

// 선거 데이터 타입
export type ElectionData = {
  sdName: string;
  cityName: string;
  sunsu: number;
  tusu: number;
  yutusu: number;
  dugsu01: number;
  dugsu02: number;
  dugsu03: number;
  jd01: string;
  jd02: string;
  jd03: string;
  hbj01: string;
  hbj02: string;
  hbj03: string;
  turnout: number;
  vote01: number;
  vote02: number;
  vote03: number;
};

/**
 * 지역 ID를 기반으로 선거 데이터에서 매칭되는 레코드 찾기
 * regions.ts의 id와 mock-data의 cityName을 매칭
 */
export function findRegionData(regionId: string, electionData: ElectionData[]): ElectionData | undefined {
  // 정확히 일치하는 경우 먼저 찾기
  let found = electionData.find((data) => {
    const fullName = data.sdName + data.cityName;
    return fullName.includes(regionId) || regionId.includes(data.cityName);
  });

  // 못 찾으면 더 유연하게 검색
  if (!found) {
    found = electionData.find((data) => {
      // cityName이 regionId에 포함되는지 확인
      return regionId.includes(data.cityName) && data.cityName !== '합계';
    });
  }

  return found;
}

/**
 * 1위 후보의 정당 색상 반환
 */
export function getWinnerColor(regionData: ElectionData | undefined): string {
  if (!regionData) {
    return '#e0e0e0'; // 기본 회색 (데이터 없음)
  }

  const votes = [
    { candidate: regionData.hbj01, vote: regionData.vote01 },
    { candidate: regionData.hbj02, vote: regionData.vote02 },
    { candidate: regionData.hbj03, vote: regionData.vote03 },
  ];

  // 득표율이 가장 높은 후보 찾기
  const winner = votes.reduce((prev, current) => (prev.vote > current.vote ? prev : current));

  // 후보자 메타데이터에서 정당 색상 가져오기
  const winnerName = winner.candidate as keyof typeof candidateMeta;
  const color = candidateMeta[winnerName]?.partyColor;

  return color || '#e0e0e0';
}

/**
 * 지역 ID로 1위 후보의 색상 반환 (원스톱 함수)
 */
export function getRegionColor(regionId: string, electionData: ElectionData[]): string {
  const regionData = findRegionData(regionId, electionData);
  return getWinnerColor(regionData);
}
