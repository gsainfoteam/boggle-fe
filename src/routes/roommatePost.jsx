import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Layout from "../component/Layout";
import { useState } from 'react'

export const Route = createFileRoute('/roommatePost')({
  component: RouteComponent,
})

export async function createRoommatePost(post) {
  console.log('백엔드로 전송할 데이터:', {
    title: post.title,
    content: post.content,
    type: "PROJECT",
    tags: post.tags,
    maxParticipants: 5,
    deadline: post.deadline,
    imageUrls: post.imageUrls || [],
    
    roommateDetails: {
      age: post.age,
      gender: post.gender,
      grade: post.grade,
      room: post.room,
      semester: post.semester,
      refrigerator: post.refrigerator,
      wifi: post.wifi,
      snoring: post.mySnoring,
      smoking: post.smoking,
      sleepTime: post.sleepTime,
      wakeUpTime: post.wakeUpTime,
      mbti: post.mbti,
      rmAge: post.rmAge,
      rmGrade: post.rmGrade,
      rmRefrigerator: post.rmRefrigerator,
      rmWifi: post.rmWifi,
      rmSnoring: post.rmSnoring,
      rmGrindingTeeth: post.rmGrindingTeeth,
      rmSmoking: post.rmSmoking,
      rmSleepTime: post.rmSleepTime,
      rmWakeUpTime: post.rmWakeUpTime,
    }
  });

  const response = await fetch(`http://boggle.is-an.ai/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: post.title,
        content: post.content,
        type: "PROJECT",
        tags: post.tags,
        maxParticipants: 5,
        deadline: post.deadline,
        imageUrls: post.imageUrls || [],
      
        roommateDetails: {
          age: post.age,
          gender: post.gender,
          grade: post.grade,
          room: post.room,
          semester: post.semester,
          refrigerator: post.refrigerator,
          wifi: post.wifi,
          snoring: post.snoring,
          smoking: post.smoking,
          sleepTime: post.sleepTime,
          wakeUpTime: post.wakeUpTime,
          mbti: post.mbti,
          rmAge: post.rmAge,
          rmGrade: post.rmGrade,
          rmRefrigerator: post.rmRefrigerator,
          rmWifi: post.rmWifi,
          rmSnoring: post.rmSnoring,
          rmGrindingTeeth: post.rmGrindingTeeth,
          rmSmoking: post.rmSmoking,
          rmSleepTime: post.rmSleepTime,
          rmWakeUpTime: post.rmWakeUpTime,
          }
        })
      });
    if (!response.ok) {
      throw new Error('Failed to post');
    }
  return response.json();
}

function RouteComponent() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1단계: 내 프로필, 2단계: 희망 룸메, 3단계: 미리보기
  
  // 내 프로필 데이터
  const [myProfile, setMyProfile] = useState({
    gender: '',
    grade: '',
    age: '',
    mbti: '',
    semester: '',
    room: '',
    sleepTime: '',
    wakeUpTime: '',
    snoring: '',
    teethGrinding: '',
    smoking: '',
    refrigerator: '',
    wifi: '',
    content: '',
  });

  // 희망 룸메 프로필 데이터
  const [rmProfile, setRmProfile] = useState({
    rmGrade: '',
    rmAge: '',
    rmSleepTime: '',
    rmWakeUpTime: '',
    rmSnoring: '',
    rmTeethGrinding: '',
    rmSmoking: ''
  });

  //formData폼에 입력된 데이터를 담고 있는 객체, setFormData 폼 데이터를 업데이트 해주는 함수

  const handleMyProfileChange = (field, value) => {
    setMyProfile(prev => ({...prev, [field]: value}));
    //field 변경할 내용(Gender), value 새로운 값(남자)
    //gender값이 처음에는 ''였는데, 선택하면 setFormData에 의해 formData.gender="남자"로 바뀜
  };

  const handleRmProfileChange = (field, value) => {
    setRmProfile(prev => ({...prev, [field]: value}));
  };

  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();              

    try {
      // 상태에서 직접 값을 가져와서 post 객체 생성
      const post = {
        title: "룸메이트 찾기",
        content: "룸메이트를 찾습니다",
        tags: ["룸메이트", "함께살기"],
        deadline: "2025-01-01",
        imageUrls: [],
        
        // 내 프로필
        age: post.age,
        gender: post.gender,
        grade: post.grade,
        room: post.room,
        semester: post.semester,
        refrigerator: post.refrigerator,
        wifi: post.wifi,
        snoring: post.snoring,
        smoking: post.smoking,
        sleepTime: post.sleepTime,
        wakeUpTime: post.wakeUpTime,
        mbti: post.mbti,
        content: post.content,
        
        // 희망 룸메 프로필
        rmGrade: rmProfile.rmGrade,
        rmAge: rmProfile.rmAge,
        rmSleepTime: rmProfile.rmSleepTime,
        rmWakeUpTime: rmProfile.rmWakeUpTime,
        rmSnoring: rmProfile.rmSnoring,
        rmTeethGrinding: rmProfile.rmTeethGrinding,
        rmSmoking: rmProfile.rmSmoking,
      };
      
      // 백엔드로 전송하고 응답 받기
      const response = await createRoommatePost(post);
      console.log('백엔드 응답:', response);
      
      // response.id 디버깅
      console.log('=== RESPONSE ID 디버깅 ===');
      console.log('response 타입:', typeof response);
      console.log('response 전체:', response);
      console.log('response.id:', response?.id);
      console.log('response.id 타입:', typeof response?.id);
      console.log('response.id 존재 여부:', response?.id !== undefined);
      console.log('response.id null 체크:', response?.id !== null);
      console.log('response.id 빈 문자열 체크:', response?.id !== '');
      console.log('response 키들:', Object.keys(response || {}));
      
      if (response && response.id) {
        console.log('페이지 이동:', `/roommatePost/${response.id}`);
        // 성공적으로 생성된 경우, 해당 포스트 페이지로 이동
        navigate({ to: `/roommatePost/${response.id}` });
      } else {
        console.error('포스트 생성 실패: 포스트 ID 없음');
        console.error('response:', response);
        console.error('response.id:', response?.id);
        alert('포스트 생성에 실패했습니다.');
      }
      
    } catch (error) {
      console.error('포스트 생성 중 오류:', error);
      alert('포스트 생성 중 오류가 발생했습니다.');
    }
  };

  // 미리보기 데이터 생성
  const previewData = {
    myProfile,
    rmProfile
  };

  return (
    <Layout>
      <div className="pt-[10px] flex flex-col items-center">
        
        <form onSubmit={handleSubmit}>
          <div className="flex justify-evenly w-[860px]">
            {/* 내 정보 입력하기 */}
            <div className="space-y-3 w-[300px] flex flex-col">
              
              {step === 1 ? (
                // 1단계: 내 프로필 입력
                <>
                <span className="text-xl text-center text-[#4b7eff] font-bold tracking-[2px]">
                  나의 룸메 프로필
                </span>
                  <div className="border-t border-[#d9d9d9] my-3" />
                  <h2 className="text-l font-bold text-[#4b7eff]">기본 정보</h2>
                      
                  {/* 성별 */}
                  <div className="flex items-center justify-center gap-[10px]">
                    <label className="block w-full items-center text-sm font-semibold text-black">
                      성별<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <div className="w-124 h-6 grid grid-cols-2 border border-white rounded-[5px]">
                      <label className="flex items-center text-sm text-[#7a7a7a] ">
                        <input
                          type="radio"
                          name="myGender"
                          value="남자"
                          checked={myProfile.gender === '남자'}
                          onChange={(e) => handleMyProfileChange('gender', e.target.value)}
                          className="mr-2 border-[#7a7a7a]"
                        />
                        남자
                      </label>
                      {/* onChange..이벤트가 발생하면 InputChange함수가 호출되고 fromData.gender가 "남자"로 업데이트 */}

                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="myGender"
                          value="여자"
                          checked={myProfile.gender === '여자'}
                          onChange={(e) => handleMyProfileChange('gender', e.target.value)}
                          className="mr-2"
                        />
                        여자
                      </label>
                    </div>
                  </div>

                  {/* 학년 */}
                  <div className="flex items-center">
                    <label className="w-full text-sm font-semibold text-black">
                      학년<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <select
                      value={myProfile.grade}
                      onChange={(e) => handleMyProfileChange('grade', e.target.value)}
                      className="
                        w-109 h-6 px-1 border border-[#7A7A7A] rounded-[5px] 
                        text-[#7A7A7A] text-xs"
                    >
                      <option value="">Select option...</option>
                      <option value="1학년 1학기">1학년 1학기</option>
                      <option value="1학년 2학기">1학년 2학기</option>
                      <option value="2학년 1학기">2학년 1학기</option>
                      <option value="3학년 1학기">3학년 1학기</option>
                      <option value="3학년 2학기">3학년 2학기</option>
                      <option value="4학년 1학기">4학년 1학기</option>
                      <option value="4학년 2학기">4학년 2학기</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>

                  {/* 나이 */}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      나이<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <select
                      value={myProfile.age}
                      onChange={(e) => handleMyProfileChange('age', e.target.value)}
                      className="
                        w-109 h-6 px-1 border border-[#7A7A7A] rounded-[5px] 
                        text-[#7A7A7A] text-xs
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select option...</option>
                      {Array.from({length: 30}, (_, i) => i + 18).map(age => (
                        <option key={age} value={age}>{age}세</option>
                      ))}
                    </select>
                  </div>

                  {/* MBTI */}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      MBTI
                    </label>
                    <select
                      value={myProfile.mbti}
                      onChange={(e) => handleMyProfileChange('mbti', e.target.value)}
                      className="
                        w-109 h-6 px-1 border border-[#7A7A7A] rounded-[5px] 
                        text-[#7A7A7A] text-xs
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select option...</option>
                      <option value="INTJ">INTJ</option>
                      <option value="INTP">INTP</option>
                      <option value="ENTJ">ENTJ</option>
                      <option value="ENTP">ENTP</option>
                      <option value="INFJ">INFJ</option>
                      <option value="INFP">INFP</option>
                      <option value="ENFJ">ENFJ</option>
                      <option value="ENFP">ENFP</option>
                      <option value="ISTJ">ISTJ</option>
                      <option value="ISFJ">ISFJ</option>
                      <option value="ESTJ">ESTJ</option>
                      <option value="ESFJ">ESFJ</option>
                      <option value="ISTP">ISTP</option>
                      <option value="ISFP">ISFP</option>
                      <option value="ESTP">ESTP</option>
                      <option value="ESFP">ESFP</option>
                    </select>
                  </div>

                  {/* 신청학기 */}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      신청학기<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <select
                      value={myProfile.semester}
                      onChange={(e) => handleMyProfileChange('semester', e.target.value)}
                      className="
                        w-109 h-6 px-1 border border-[#7A7A7A] rounded-[5px] 
                        text-[#7A7A7A] text-xs
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select option...</option>
                      <option value="2024-1">2024년 1학기</option>
                      <option value="2024-2">2024년 2학기</option>
                      <option value="2025-1">2025년 1학기</option>
                      <option value="2025-2">2025년 2학기</option>
                    </select>
                  </div>

                  {/* 원하는 호실 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                      <label className="block w-full text-sm font-semibold text-black">
                        원하는 호실
                      </label>
                      <div className="flex items-center gap-[25px]">
                        
                        <div className="flex">
                          {/* 호실 번호 입력 필드 */}
                          <input
                            type="text"
                            value={myProfile.room.replace(/[GIS]/g, '')}
                            onChange={(e) => {
                              const letter = myProfile.room.match(/[GIS]/)?.[0] || '';
                              const number = e.target.value;
                              handleMyProfileChange('room', letter + number);
                            }}
                            placeholder="ex) T123"
                            className="
                              w-18 h-6 border border-[#7a7a7a] rounded-[5px] 
                              text-center text-[#7a7a7a] text-xs
                              focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* 현재 거주중 버튼 - 두 번째 줄에 오른쪽으로 쏠림 */}
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => handleMyProfileChange('isCurrentlyResiding', !myProfile.isCurrentlyResiding)}
                        className={`
                          w-18 h-6 border rounded-[5px] text-xs font-medium
                          focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors
                          ${myProfile.isCurrentlyResiding 
                            ? 'bg-[#4b7eff] text-white border-[#4b7eff]' 
                            : 'bg-white text-[#7a7a7a] border-[#7a7a7a] hover:bg-gray-50'
                          }
                        `}
                      >
                        현재 거주중
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t border-[#d9d9d9] mb-3" />
                  <h2 className="text-l font-bold text-[#4b7eff]">생활 습관</h2>

                  {/* 수면시간 */}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      수면시간<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <div className="w-116 h-6 flex justify-between items-center border border-white rounded-[5px]">
                      <img src="/post icons/moon.svg" alt="half-moon" className="w-4 h-4 mr-[3px]" />
                      <input 
                        type="text"
                        value={myProfile.sleepStart}
                        onChange={(e) => handleMyProfileChange('sleepStart', e.target.value)}
                        placeholder="21:00"
                        className="w-full h-6 px-2 border text-[#7a7a7a] border-[#7a7a7a] rounded-[5px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                     
                      <span className="text-black font-thin text-lg mx-[10px]">~</span>
                     
                      <img src="/post icons/sun.svg" alt="half-moon" className="w-4 h-4 mr-[3px]" />
                      <input 
                        type="text"
                        value={myProfile.sleepEnd}
                        onChange={(e) => handleMyProfileChange('sleepEnd', e.target.value)}
                        placeholder="07:00"
                        className="w-full h-6 px-2 text-[#7a7a7a] border border-[#7a7a7a] rounded-[5px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>  
                  </div>

                  {/* 코골이 */}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      코골이<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <div className="w-113 h-6 grid grid-cols-2 border border-white rounded-[5px]">
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="mySnoring"
                          value="있어요"
                          checked={myProfile.snoring === '있어요'}
                          onChange={(e) => handleMyProfileChange('snoring', e.target.value)}
                          className="mr-2"
                        />
                        있어요
                      </label>
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="mySnoring"
                          value="없어요"
                          checked={myProfile.snoring === '없어요'}
                          onChange={(e) => handleMyProfileChange('snoring', e.target.value)}
                          className="mr-2"
                        />
                        없어요
                      </label>
                    </div>
                  </div>

                  {/* 이갈이 */}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      이갈이<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <div className="w-113 h-6 grid grid-cols-2 border border-white rounded-[5px]">
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="myTeethGrinding"
                          value="있어요"
                          checked={myProfile.teethGrinding === '있어요'}
                          onChange={(e) => handleMyProfileChange('teethGrinding', e.target.value)}
                          className="mr-2"
                        />
                        있어요
                      </label>
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="myTeethGrinding"
                          value="없어요"
                          checked={myProfile.teethGrinding === '없어요'}
                          onChange={(e) => handleMyProfileChange('teethGrinding', e.target.value)}
                          className="mr-2"
                        />
                        없어요
                      </label>
                    </div>
                  </div>

                  {/* 담배 */}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      담배<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <div className="w-113 h-6 grid grid-cols-2 border border-white rounded-[5px]">
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="mySmoking"
                          value="해요"
                          checked={myProfile.smoking === '해요'}
                          onChange={(e) => handleMyProfileChange('smoking', e.target.value)}
                          className="mr-2"
                        />
                        해요
                      </label>
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="mySmoking"
                          value="안해요"
                          checked={myProfile.smoking === '안해요'}
                          onChange={(e) => handleMyProfileChange('smoking', e.target.value)}
                          className="mr-2"
                        />
                        안해요
                      </label>
                    </div>
                  </div>

                  <div className="border-t border-[#d9d9d9] mb-3" />
                  <h2 className="text-l font-bold text-[#4b7eff]">물품</h2>
                  
                  {/* 냉장고 */}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      냉장고<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <div className="w-113 h-6 grid grid-cols-2 border border-white rounded-[5px]">
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="myRefrigerator"
                          value="있어요"
                          checked={myProfile.refrigerator === '있어요'}
                          onChange={(e) => handleMyProfileChange('refrigerator', e.target.value)}
                          className="mr-2"
                        />
                        있어요
                      </label>
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="myRefrigerator"
                          value="없어요"
                          checked={myProfile.refrigerator === '없어요'}
                          onChange={(e) => handleMyProfileChange('refrigerator', e.target.value)}
                          className="mr-2"
                        />
                        없어요
                      </label>
                    </div>
                  </div>

                  {/* wifi*/}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      WIFI<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <div className="w-113 h-6 grid grid-cols-2 border border-white rounded-[5px]">
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="wifi"
                          value="있어요"
                          checked={myProfile.wifi === '있어요'}
                          onChange={(e) => handleMyProfileChange('wifi', e.target.value)}
                          className="mr-2"
                        />
                        있어요
                      </label>
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="wifi"
                          value="없어요"
                          checked={myProfile.wifi === '없어요'}
                          onChange={(e) => handleMyProfileChange('wifi', e.target.value)}
                          className="mr-2"
                        />
                        없어요
                      </label>
                    </div>
                  </div>

                  <div className="border-t border-[#d9d9d9] mb-3" />

                  {/* 기타 */}
                  <div className="flex items-center">
                    <label className="block w-full text-m font-semibold text-black">
                      기타
                    </label>
                    <input
                      type="text"
                      value={myProfile.other}
                      onChange={(e) => handleMyProfileChange('other', e.target.value)}
                      placeholder="ex) 저는 벌레를 잘 잡습니다."
                      className="w-109 px-1 h-6 text-xs border border-[#7a7a7a] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  {/* 다음 단계 버튼 */}
                  <div className="flex justify-center mt-[10px]">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-50 h-7 text-sm bg-[#4b7eff] hover:bg-blue-700 text-white font-semibold rounded-[7px] transition duration-200"
                    >
                      내가 원하는 룸메 정보 입력하기
                    </button>
                  </div>
                </>
              ) : step === 2 ? (
                // 2단계: 희망 룸메 프로필 입력
                <>
                <span className="text-xl text-center text-[#ad6dff] font-bold tracking-[2px]">
                  희망 룸메 프로필
                </span>

                  <div className="border-t border-[#d9d9d9] my-3" />
                  <h2 className="text-l text-[#ad6dff] font-bold">기본 정보</h2>

                  {/* 희망 학년 */}
                  <div className="flex items-center">
                    <label className="w-full text-sm font-semibold text-black">
                      학년<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <select
                      value={rmProfile.rmGrade}
                      onChange={(e) => handleRmProfileChange('rmGrade', e.target.value)}
                      className="
                        w-109 h-6 px-1 border border-[#7A7A7A] rounded-[5px] 
                        text-[#7A7A7A] text-xs"
                    >
                      <option value="">Select option...</option>
                      <option value="1학년">1학년</option>
                      <option value="2학년">2학년</option>
                      <option value="3학년">3학년</option>
                      <option value="4학년">4학년</option>
                      <option value="상관없음">상관없음</option>
                    </select>
                  </div>

                  {/* 희망 나이 */}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      나이<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <select
                      value={rmProfile.rmAge}
                      onChange={(e) => handleRmProfileChange('rmAge', e.target.value)}
                      className="
                        w-109 h-6 px-1 border border-[#7A7A7A] rounded-[5px] 
                        text-[#7A7A7A] text-xs
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select option...</option>
                      {Array.from({length: 30}, (_, i) => i + 18).map(age => (
                        <option key={age} value={age}>{age}세</option>
                      ))}
                      <option value="상관없음">상관없음</option>
                    </select>
                  </div>
                  
                  <div className="border-t border-[#d9d9d9] mb-3" />
                  <h2 className="text-l font-bold text-[#ad6dff]">생활 습관</h2>

                  {/* 수면시간 */}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      수면시간<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <div className="w-116 h-6 flex justify-between items-center border border-white rounded-[5px]">
                      <img src="/post icons/moon.svg" alt="half-moon" className="w-4 h-4 mr-[3px]" />
                      <input 
                        type="text"
                        value={rmProfile.rmSleepTime}
                        onChange={(e) => handleRmProfileChange('rmSleepTime', e.target.value)}
                        placeholder="21:00"
                        className="w-full h-6 px-2 border border-[#7a7a7a] rounded-[5px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                     
                      <span className="text-black font-thin text-lg mx-[10px]">~</span>
                     
                      <img src="/post icons/sun.svg" alt="half-moon" className="w-4 h-4 mr-[3px]" />
                      <input 
                        type="text"
                        value={rmProfile.rmWakeUpTime}
                        onChange={(e) => handleRmProfileChange('rmWakeUpTime', e.target.value)}
                        placeholder="07:00"
                        className="w-full h-6 px-2 text-[#7a7a7a] border border-[#7a7a7a] rounded-[5px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>  
                  </div>

                  {/*코골이 */}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      코골이<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <div className="w-113 h-6 grid grid-cols-2 border border-white rounded-[5px]">
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="rmSnoring"
                          value="있어요"
                          checked={rmProfile.rmSnoring === '있어요'}
                          onChange={(e) => handleRmProfileChange('rmSnoring', e.target.value)}
                          className="mr-2"
                        />
                        있어요
                      </label>
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="rmSnoring"
                          value="없어요"
                          checked={rmProfile.rmSnoring === '없어요'}
                          onChange={(e) => handleRmProfileChange('rmSnoring', e.target.value)}
                          className="mr-2"
                        />
                        없어요
                      </label>
                    </div>
                  </div>

                  {/* 이갈이 */}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      이갈이<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <div className="w-113 h-6 grid grid-cols-2 border border-white rounded-[5px]">
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="rmTeethGrinding"
                          value="있어요"
                          checked={rmProfile.teethGrinding === '있어요'}
                          onChange={(e) => handleRmProfileChange('rmTeethGrinding', e.target.value)}
                          className="mr-2"
                        />
                        있어요
                      </label>
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="rmTeethGrinding"
                          value="없어요"
                          checked={rmProfile.rmTeethGrinding === '없어요'}
                          onChange={(e) => handleRmProfileChange('rmTeethGrinding', e.target.value)}
                          className="mr-2"
                        />
                        없어요
                      </label>
                    </div>
                  </div>

                  {/* 희망 흡연 */}
                  <div className="flex items-center">
                    <label className="block w-full text-sm font-semibold text-black">
                      담배<span className="text-[#ff0000] ml-[1px]">*</span>
                    </label>
                    <div className="w-113 h-6 grid grid-cols-2 border border-white rounded-[5px]">
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="rmSmoking"
                          value="해요"
                          checked={rmProfile.rmSmoking === '해요'}
                          onChange={(e) => handleRmProfileChange('rmSmoking', e.target.value)}
                          className="mr-2"
                        />
                        해요
                      </label>
                      <label className="flex items-center text-sm text-[#7a7a7a]">
                        <input
                          type="radio"
                          name="rmSmoking"
                          value="안해요"
                          checked={rmProfile.rmSmoking === '안해요'}
                          onChange={(e) => handleRmProfileChange('rmSmoking', e.target.value)}
                          className="mr-2"
                        />
                        안해요
                      </label>
                    </div>
                  </div>

                  {/* 버튼들 */}
                  <div className="flex justify-center gap-4 mt-[10px]">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="w-40 h-7 text-sm bg-[#d9d9d9] hover:bg-gray-600 text-white font-semibold rounded-[7px] transition duration-200"
                    >
                      이전 단계
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-40 h-7 text-sm bg-[#ad6dff] hover:bg-blue-700 text-white font-semibold rounded-[7px] transition duration-200"
                    >
                      다음 단계
                    </button>
                  </div>
                </>
              ) : (
                // 3단계: 미리보기
                <>
                <div className="flex flex-col items-center w-[350px]">
                  <span className="text-xl text-center font-pretendard font-bold mb-[5px]">
                    룸메이트 구합니다!
                  </span>
                  
                  <div className="flex items-center justify-center gap-[8px]">
                    <span className="text-[10px]">작성자: 김도현</span>
                    <div className="w-px h-3 bg-[#dadada]"></div>
                    <span className="text-[10px]">게시일: 2026.07.18 (SAT)</span>
                    <div className="w-px h-3 bg-[#dadada]"></div>
                    <span className="text-[10px]">마감일: 2026.07.26 (SAT)</span>
                  </div>
                
                  <div className="border-t border-[#d9d9d9] my-3" />
                  
                    <div className="flex gap-[20px] mb-6">
                      {/* 내 프로필 미리보기 */}
                      <div className="flex-1">
                        <h2 className="text-l font-bold text-[#4b7eff] mb-3">000의 프로필</h2>
                        <div className="bg-[#CAD3EA]/21 p-4 rounded-lg space-y-2">
                          <div className="flex flex-col w-[280px] gap-[5px]">
                            <h2 className="text-l font-bold text-[#4b7eff]">기본 정보</h2>
                            <div><span className="text-sm font-semibold">성별:</span> {myProfile.gender || '-'}</div>
                            <div><span className="text-sm font-semibold">학년:</span> {myProfile.grade || '-'}</div>
                            <div><span className="text-sm font-semibold">나이:</span> {myProfile.age || '-'}</div>
                            <div><span className="text-sm font-semibold">MBTI:</span> {myProfile.mbti || '-'}</div>
                            <div><span className="text-sm font-semibold">모집학기:</span> {myProfile.semester || '-'}</div>
                            <div><span className="text-sm font-semibold">원하는 호실:</span> {myProfile.room || '-'}</div>
                            <div><span className="text-sm font-semibold">현재 거주중:</span> {myProfile.isCurrentlyResiding ? 'O' : 'X'}</div>

                            <div className="border-t border-[#d9d9d9]" />
                            
                            <h2 className="text-l font-bold text-[#4b7eff]">생활 습관</h2>
                            <div><span className="text-sm font-semibold">수면시간:</span> {myProfile.sleepStart} ~ {myProfile.sleepEnd}</div>
                            <div><span className="text-sm font-semibold">코골이:</span> {myProfile.snoring || '-'}</div>
                            <div><span className="text-sm font-semibold">이갈이:</span> {myProfile.teethGrinding || '-'}</div>
                            <div><span className="text-sm font-semibold">흡연:</span> {myProfile.smoking || '-'}</div>

                            <div className="border-t border-[#d9d9d9]" />

                            <h2 className="text-l font-bold text-[#4b7eff]">물품</h2>
                            <div><span className="text-sm font-semibold">냉장고:</span> {myProfile.refrigerator || '-'}</div>
                            <div><span className="text-sm font-semibold">WIFI:</span> {myProfile.wifi || '-'}</div>
                            
                            <div className="border-t border-[#d9d9d9]" />

                            <h2 className="text-l font-bold text-[#4b7eff]">추가 정보</h2>
                            <span className="font-semibold"> {myProfile.other}</span>
                          </div>
                        </div>
                      </div>

                      {/* 희망 룸메 프로필 미리보기 */}
                      <div className="flex-1">
                        <h2 className="text-l font-bold text-[#ad6dff] mb-3">희망 룸메 프로필</h2>
                        <div className="bg-[#eee1ff]/30 p-4 rounded-lg space-y-2">
                          <div className="flex flex-col w-[280px] gap-[5px]">
                            <div><span className="text-sm font-semibold">학년:</span> {rmProfile.rmGrade || '-'}</div>
                            <div><span className="text-sm font-semibold">나이:</span> {rmProfile.rmAge || '-'}</div>
                            <div><span className="text-sm font-semibold">수면시간:</span> {rmProfile.rmSleepTime} ~ {rmProfile.rmWakeUpTime}</div>
                            <div><span className="text-sm font-semibold">코골이:</span> {rmProfile.rmSnoring || '-'}</div>
                            <div><span className="text-sm font-semibold">이갈이:</span> {rmProfile.rmTeethGrinding || '-'}</div>
                            <div><span className="text-sm font-semibold">흡연:</span> {rmProfile.rmSmoking || '-'}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                  {/* 버튼들 */}
                  <div className="flex justify-center gap-4 mt-[10px]">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="w-40 h-7 text-sm border border-[#4b7eff] hover:bg-gray-600 text-[#4b7eff] font-semibold rounded-[7px] transition duration-200"
                    >
                      이전
                    </button>
                    <button
                      type="submit"
                      className="w-40 h-7 text-sm bg-[#4b7eff] hover:bg-blue-700 text-white font-semibold rounded-[7px] transition duration-200"
                    >
                      게시하기
                    </button>
                  </div>
                </div>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
