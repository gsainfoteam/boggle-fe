import { createFileRoute } from '@tanstack/react-router'
import Layout from "../component/Layout";
import { useState } from 'react'

export const Route = createFileRoute('/roommatePost')({
  component: RouteComponent,
})

export async function createRoommatePost(post) {
  const response = await fetch(`/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: "ROOMMATE",
      title: post.title,
      content: post.content,
      
      tags: [],
      maxParticipants: 2,
      roommateDetails: {
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
        rmRefrigerator: post.rmRefrigerator,
        rmWifi: post.rmWifi,
        rmSnoring: post.rmSnoring,
        rmSmoking: post.rmSmoking,
        rmMbti: post.rmMbti
      }
    })
  });
  return response.data;
}

function RouteComponent() {
  const [formData, setFormData] = useState({
    gender: '',
    grade: '',
    age: '',
    mbti: '',
    room: '',
    semester: '',
    sleepStart: '21:00',
    sleepEnd: '07:00',
    refrigerator: '',
    snoring: '',
    teethGrinding: '',
    smoking: '',
    other: '',
    isCurrentlyResiding: false
  });
//formData폼에 입력된 데이터를 담고 있는 객체, setFormData 폼 데이터를 업데이트 해주는 함수

  const InputChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
    //field 변경할 내용(Gender), value 새로운 값(남자)
    //gender값이 처음에는 ''였는데, 선택하면 setFormData에 의해 formData.gender="남자"로 바뀜
  };

  const handleSubmit = async (e) => {
    e.preventDefault();              

    
    // 상태에서 직접 값을 가져와서 post 객체 생성
    const post = {
      title: "룸메이트 찾기",
      content: "룸메이트를 찾습니다",
      grade: formData.grade,
      room: formData.room,
      semester: formData.semester,
      refrigerator: formData.refrigerator,
      wifi: "있어요", // 기본값
      snoring: formData.snoring,
      smoking: formData.smoking,
      sleepTime: formData.sleepStart,
      wakeUpTime: formData.sleepEnd,
      mbti: formData.mbti,
      rmRefrigerator: "상관없음", // 기본값
      rmWifi: "상관없음", // 기본값
      rmSnoring: "상관없음", // 기본값
      rmSmoking: "상관없음", // 기본값
      rmMbti: "상관없음" // 기본값
    };
    
    console.log('폼 데이터:', post);
    await createRoommatePost(post);
  };

  return (
    <Layout>
      <div className="pt-[10px] flex flex-col items-center">
        <span className="text-xl text-center text-[#4b7eff] font-bold">
          나의 룸메 프로필
        </span>
        
        <form onSubmit={handleSubmit}>
          <div className="flex justify-evenly w-[860px]">
            {/* 내 정보 입력하기 */}
            <div className="space-y-3 w-[300px] flex flex-col">
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
                      checked={formData.gender === '남자'}
                      onChange={(e) => InputChange('gender', e.target.value)}
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
                      checked={formData.gender === '여자'}
                      onChange={(e) => InputChange('gender', e.target.value)}
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
                  value={formData.grade}
                  onChange={(e) => InputChange('grade', e.target.value)}
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
                  value={formData.age}
                  onChange={(e) => InputChange('age', e.target.value)}
                  className="
                    w-109 h-6 px-1 border border-[#7A7A7A] rounded-[5px] 
                    text-[#7A7A7A] text-sm
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
                  value={formData.mbti}
                  onChange={(e) => InputChange('mbti', e.target.value)}
                  className="
                    w-109 h-6 px-1 border border-[#7A7A7A] rounded-[5px] 
                    text-[#7A7A7A] text-sm
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
                  value={formData.semester}
                  onChange={(e) => InputChange('semester', e.target.value)}
                  className="
                    w-109 h-6 px-1 border border-[#7A7A7A] rounded-[5px] 
                    text-[#7A7A7A] text-sm
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
                    <div className="flex space-x-[1px]">
                      {/* G, I, S, T 버튼들 */}
                      {['G', 'I', 'S', 'T'].map((letter) => (
                        <button
                          key={letter}
                          type="button"
                          className={`
                            w-6 h-6 border rounded-[7px] text-sm font-bold 
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                            ${formData.room.startsWith(letter) 
                              ? 'bg-[#4b7eff] text-white border-[#4b7eff]' 
                              : 'border-[#7a7a7a] text-[#7a7a7a] hover:bg-gray-50'
                            }
                          `}
                          onClick={() => InputChange('room', letter)}
                        >
                          {letter}
                        </button>
                      ))}
                    </div>
                    <div className="flex">
                      {/* 호실 번호 입력 필드 */}
                      <input
                        type="text"
                        value={formData.room.replace(/[GIS]/g, '')}
                        onChange={(e) => {
                          const letter = formData.room.match(/[GIS]/)?.[0] || '';
                          const number = e.target.value;
                          InputChange('room', letter + number);
                        }}
                        placeholder="ex) 123"
                        className="
                          w-14 h-6 border border-[#7a7a7a] rounded-[5px] 
                          text-center text-[#7a7a7a] text-sm 
                          focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
                
                {/* 현재 거주중 버튼 - 두 번째 줄에 오른쪽으로 쏠림 */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => InputChange('isCurrentlyResiding', !formData.isCurrentlyResiding)}
                    className={`
                      w-18 h-6 border rounded-[5px] text-xs font-medium
                      focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors
                      ${formData.isCurrentlyResiding 
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
                    value={formData.sleepStart}
                    onChange={(e) => InputChange('sleepStart', e.target.value)}
                    placeholder="21:00"
                    className="w-full h-6 px-2 border border-[#7a7a7a] rounded-[5px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                 
                  <span className="text-black font-thin text-lg mx-[10px]">~</span>
                 
                  <img src="/post icons/sun.svg" alt="half-moon" className="w-4 h-4 mr-[3px]" />
                  <input 
                    type="text"
                    value={formData.sleepEnd}
                    onChange={(e) => InputChange('sleepEnd', e.target.value)}
                    placeholder="07:00"
                    className="w-full h-6 px-2 border border-[#7a7a7a] rounded-[5px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      checked={formData.snoring === '있어요'}
                      onChange={(e) => InputChange('snoring', e.target.value)}
                      className="mr-2"
                    />
                    있어요
                  </label>
                  <label className="flex items-center text-sm text-[#7a7a7a]">
                    <input
                      type="radio"
                      name="mySnoring"
                      value="없어요"
                      checked={formData.snoring === '없어요'}
                      onChange={(e) => InputChange('snoring', e.target.value)}
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
                      checked={formData.teethGrinding === '있어요'}
                      onChange={(e) => InputChange('teethGrinding', e.target.value)}
                      className="mr-2"
                    />
                    있어요
                  </label>
                  <label className="flex items-center text-sm text-[#7a7a7a]">
                    <input
                      type="radio"
                      name="myTeethGrinding"
                      value="없어요"
                      checked={formData.teethGrinding === '없어요'}
                      onChange={(e) => InputChange('teethGrinding', e.target.value)}
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
                      checked={formData.smoking === '해요'}
                      onChange={(e) => InputChange('smoking', e.target.value)}
                      className="mr-2"
                    />
                    해요
                  </label>
                  <label className="flex items-center text-sm text-[#7a7a7a]">
                    <input
                      type="radio"
                      name="mySmoking"
                      value="안해요"
                      checked={formData.smoking === '안해요'}
                      onChange={(e) => InputChange('smoking', e.target.value)}
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
                      checked={formData.refrigerator === '있어요'}
                      onChange={(e) => InputChange('refrigerator', e.target.value)}
                      className="mr-2"
                    />
                    있어요
                  </label>
                  <label className="flex items-center text-sm text-[#7a7a7a]">
                    <input
                      type="radio"
                      name="myRefrigerator"
                      value="없어요"
                      checked={formData.refrigerator === '없어요'}
                      onChange={(e) => InputChange('refrigerator', e.target.value)}
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
                      checked={formData.wifi === '있어요'}
                      onChange={(e) => InputChange('wifi', e.target.value)}
                      className="mr-2"
                    />
                    있어요
                  </label>
                  <label className="flex items-center text-sm text-[#7a7a7a]">
                    <input
                      type="radio"
                      name="myRefrigerator"
                      value="없어요"
                      checked={formData.wifi === '없어요'}
                      onChange={(e) => InputChange('wifi', e.target.value)}
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
                  value={formData.other}
                  onChange={(e) => InputChange('other', e.target.value)}
                  placeholder="ex) 저는 벌레를 잘 잡습니다."
                  className="w-109 px-1 h-6 text-xs border border-[#7a7a7a] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex justify-center mt-[10px]">
                <button
                  type="submit"
                  className="w-50 h-7 text-sm bg-[#4b7eff] hover:bg-blue-700 text-white font-semibold rounded-[7px] transition duration-200"
                >
                  내가 원하는 룸메 정보 입력하기
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
