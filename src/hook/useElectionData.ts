import { useEffect, useState } from 'react';

// ElectionData 타입 정의
// API 응답 형태에 맞춰 선거 데이터를 구조화함 (TypeScript 타입 정의)
type ElectionData = {
  sdName: string;     // 시도 이름 (예: 서울특별시)
  cityName: string;   // 시군구 이름 (예: 강서구)
  sunsu: number;      // 선거인수
  tusu: number;       // 투표수
  yutusu: number;     // 유효투표수
  dugsu01: number;    // 후보1 득표수
  dugsu02: number;    // 후보2 득표수
  dugsu03: number;    // 후보3 득표수
  jd01: string;       // 후보1 정당
  jd02: string;       // 후보2 정당
  jd03: string;       // 후보3 정당
  hbj01: string;      // 후보1 이름
  hbj02: string;      // 후보2 이름
  hbj03: string;      // 후보3 이름
  turnout: number;    // 투표율
  vote01: number;     // 후보1 득표율
  vote02: number;     // 후보2 득표율
  vote03: number;     // 후보3 득표율
};

//  커스텀 훅 정의: 컴포넌트에서 API 호출과 로딩/에러 상태를 쉽게 재사용하기 위해 정의
export function useElectionData() {
  // 전체 선거 데이터를 담는 state (초기값은 빈 배열)
  const [data, setData] = useState<ElectionData[]>([]);

  // 로딩 상태 관리 (데이터 받아오는 중이면 true)
  const [loading, setLoading] = useState(true);

  // 에러 메시지 상태 (에러 없으면 null)
  const [error, setError] = useState<null | string>(null);

  //  컴포넌트 마운트 시(처음 렌더링 시) 한 번만 실행되는 함수
  useEffect(() => {
    // 비동기로 선거 데이터를 fetch 하는 함수
    async function fetchElectionData() {
      try {
        // /api/election (mock API) 호출
        const res = await fetch('/api/election');
        if (!res.ok) throw new Error('API 응답 실패');

        // 응답 결과를 JSON으로 파싱하여 state에 저장
        const json = await res.json();
        setData(json);
      } catch (err) {
        // 오류 발생 시 에러 메시지를 state에 저장
        console.error('선거 데이터 로딩 실패:', err);
        setError('데이터 로딩 중 오류가 발생했습니다.');
      } finally {
        // 데이터 로딩이 끝나면 loading 상태를 false로 설정
        setLoading(false);
      }
    }

    // useEffect 내에서 fetch 함수 실행
    fetchElectionData();
  }, []); // 빈 배열 → 컴포넌트가 처음 마운트될 때만 실행

  // 이 훅을 사용하는 컴포넌트에서 데이터를 쉽게 사용하도록 반환
  return { data, loading, error };
}