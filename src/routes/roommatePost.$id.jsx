import { createFileRoute, useParams } from '@tanstack/react-router'
import Layout from "../component/Layout";
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/roommatePost/$id')({
  component: PostDetailComponent,
})

// 포스트 상세 정보 가져오기 함수
async function getPostDetail(id) {
  try {
    const response = await fetch(`http://localhost:3000/post/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('포스트를 가져올 수 없습니다');
    }
    
    return response.json();
  } catch (error) {
    console.error('포스트 상세 정보 가져오기 실패:', error);
    throw error;
  }
}

function PostDetailComponent() {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true);
        const data = await getPostDetail(id);
        setPostData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              포스트 로딩 중...
            </h1>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              오류 발생
            </h1>
            <p className="text-gray-700">{error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!postData) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              포스트를 찾을 수 없습니다
            </h1>
          </div>
        </div>
      </Layout>
    );
  }

  // roommateDetails에서 데이터 추출
  const roommateDetails = postData.roommateDetails || {};
  
  // 내 프로필 데이터 (백엔드 응답 구조에 맞게 매핑)
  const myProfile = {
    gender: roommateDetails.myGender || roommateDetails.gender || '-',
    grade: roommateDetails.myGrade || roommateDetails.grade || '-',
    age: roommateDetails.myAge || roommateDetails.age || '-',
    mbti: roommateDetails.myMbti || roommateDetails.mbti || '-',
    room: roommateDetails.myRoom || roommateDetails.room || '-',
    semester: roommateDetails.mySemester || roommateDetails.semester || '-',
    sleepStart: roommateDetails.mySleepTime || roommateDetails.sleepStart || '21:00',
    sleepEnd: roommateDetails.myWakeUpTime || roommateDetails.sleepEnd || '07:00',
    refrigerator: roommateDetails.myRefrigerator || roommateDetails.refrigerator || '-',
    wifi: roommateDetails.myWifi || roommateDetails.wifi || '-',
    snoring: roommateDetails.mySnoring || roommateDetails.snoring || '-',
    teethGrinding: roommateDetails.myTeethGrinding || roommateDetails.teethGrinding || '-',
    smoking: roommateDetails.mySmoking || roommateDetails.smoking || '-',
    other: roommateDetails.myOther || roommateDetails.other || '',
    isCurrentlyResiding: roommateDetails.myIsCurrentlyResiding || roommateDetails.isCurrentlyResiding || false
  };

  // 희망 룸메 프로필 데이터
  const desiredProfile = {
    gender: roommateDetails.rmGender || roommateDetails.desiredGender || '-',
    grade: roommateDetails.rmGrade || roommateDetails.desiredGrade || '-',
    age: roommateDetails.rmAge || roommateDetails.desiredAge || '-',
    mbti: roommateDetails.rmMbti || roommateDetails.desiredMbti || '-',
    room: roommateDetails.rmRoom || roommateDetails.desiredRoom || '-',
    semester: roommateDetails.rmSemester || roommateDetails.desiredSemester || '-',
    refrigerator: roommateDetails.rmRefrigerator || roommateDetails.desiredRefrigerator || '-',
    wifi: roommateDetails.rmWifi || roommateDetails.desiredWifi || '-',
    snoring: roommateDetails.rmSnoring || roommateDetails.desiredSnoring || '-',
    smoking: roommateDetails.rmSmoking || roommateDetails.desiredSmoking || '-'
  };

  return (
    <Layout>
      <div className="pt-[10px] flex flex-col items-center">
        <div className="flex flex-col items-center w-[350px]">
          <span className="text-xl text-center font-pretendard font-bold mb-[5px]">
            {postData.title || "룸메이트 구합니다!"}
          </span>
          
          <div className="flex items-center justify-center gap-[8px]">
            <span className="text-[10px]">작성자: {postData.author?.name || '익명'}</span>
            <div className="w-px h-3 bg-[#dadada]"></div>
            <span className="text-[10px]">게시일: {new Date(postData.createdAt).toLocaleDateString()}</span>
            <div className="w-px h-3 bg-[#dadada]"></div>
            <span className="text-[10px]">마감일: {new Date(postData.deadline).toLocaleDateString()}</span>
          </div>
        
          <div className="border-t border-[#d9d9d9] my-3" />
          
          {/* 프로필 미리보기 - 가로 배치 */}
          <div className="flex gap-[20px] mb-6">
            {/* 내 프로필 미리보기 */}
            <div className="flex-1">
              <h2 className="text-l font-bold text-[#4b7eff] mb-3">내 프로필</h2>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex flex-col w-[280px] gap-[5px]">
                  <h2 className="text-l font-bold text-[#4b7eff]">기본 정보</h2>
                  <div><span className="text-sm font-semibold">성별:</span> {myProfile.gender}</div>
                  <div><span className="text-sm font-semibold">학년:</span> {myProfile.grade}</div>
                  <div><span className="text-sm font-semibold">나이:</span> {myProfile.age}</div>
                  <div><span className="text-sm font-semibold">MBTI:</span> {myProfile.mbti}</div>
                  <div><span className="text-sm font-semibold">모집학기:</span> {myProfile.semester}</div>
                  <div><span className="text-sm font-semibold">원하는 호실:</span> {myProfile.room}</div>
                  <div><span className="text-sm font-semibold">현재 거주중:</span> {myProfile.isCurrentlyResiding ? 'O' : 'X'}</div>

                  <div className="border-t border-[#d9d9d9]" />
                  
                  <h2 className="text-l font-bold text-[#4b7eff]">생활 습관</h2>
                  <div><span className="text-sm font-semibold">수면시간:</span> {myProfile.sleepStart} ~ {myProfile.sleepEnd}</div>
                  <div><span className="text-sm font-semibold">코골이:</span> {myProfile.snoring}</div>
                  <div><span className="text-sm font-semibold">이갈이:</span> {myProfile.teethGrinding}</div>
                  <div><span className="text-sm font-semibold">흡연:</span> {myProfile.smoking}</div>

                  <div className="border-t border-[#d9d9d9]" />

                  <h2 className="text-l font-bold text-[#4b7eff]">물품</h2>
                  <div><span className="text-sm font-semibold">냉장고:</span> {myProfile.refrigerator}</div>
                  <div><span className="text-sm font-semibold">WIFI:</span> {myProfile.wifi}</div>
                  
                  <div className="border-t border-[#d9d9d9]" />

                  <h2 className="text-l font-bold text-[#4b7eff]">추가 정보</h2>
                  <span className="font-semibold">{myProfile.other || '없음'}</span>
                </div>
              </div>
            </div>

            {/* 희망 룸메 프로필 미리보기 */}
            <div className="flex-1">
              <h2 className="text-l font-bold text-[#ad6dff] mb-3">희망 룸메 프로필</h2>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex flex-col w-[280px] gap-[5px]">
                  <div><span className="text-sm font-semibold">학년:</span> {desiredProfile.grade}</div>
                  <div><span className="text-sm font-semibold">나이:</span> {desiredProfile.age}</div>
                  <div><span className="text-sm font-semibold">수면시간:</span> {desiredProfile.sleepStart || myProfile.sleepStart} ~ {myProfile.sleepEnd}</div>
                  <div><span className="text-sm font-semibold">코골이:</span> {desiredProfile.snoring}</div>
                  <div><span className="text-sm font-semibold">이갈이:</span> {desiredProfile.teethGrinding}</div>
                  <div><span className="text-sm font-semibold">흡연:</span> {desiredProfile.smoking}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 추가 정보 */}
          {postData.content && (
            <div className="w-full mb-6">
              <h2 className="text-l font-bold text-[#4b7eff] mb-3">추가 설명</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm">{postData.content}</p>
              </div>
            </div>
          )}

          {/* 태그 */}
          {postData.tags && postData.tags.length > 0 && (
            <div className="w-full mb-6">
              <h2 className="text-l font-bold text-[#4b7eff] mb-3">태그</h2>
              <div className="flex flex-wrap gap-2">
                {postData.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default PostDetailComponent;
