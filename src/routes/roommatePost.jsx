import { createFileRoute } from '@tanstack/react-router'
import Layout from "../component/Layout";
import { useState } from 'react'

export const Route = createFileRoute('/roommatePost')({
  component: RouteComponent,
})


function RouteComponent() {
  const [formData, setFormData] = useState({
    // 내 정보
    myGender: '',
    myGrade: '',
    myAge: '',
    myMbti: '',
    desiredRoom: '',
    applicationSemester: '',
    mySleepStart: '21:00',
    mySleepEnd: '07:00',
    myRefrigerator: '',
    mySnoring: '',
    myTeethGrinding: '',
    mySmoking: '',
    myOther: '',
    isCurrentlyResiding: false, // 현재 거주중 상태 추가
    
    // 원하는 룸메 정보
    preferredGrade: '',
    preferredAge: '',
    preferredMbti: '',
    preferredSleepStart: '21:00',
    preferredSleepEnd: '07:00',
    preferredSnoring: '',
    preferredTeethGrinding: '',
    preferredSmoking: '',
    preferredOther: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // 현재 거주중 버튼 토글 함수
  const toggleCurrentlyResiding = () => {
    setFormData(prev => ({
      ...prev,
      isCurrentlyResiding: !prev.isCurrentlyResiding
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('폼 데이터:', formData)
    // 여기에 API 호출 로직 추가
  }

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
                        checked={formData.myGender === '남자'}
                        onChange={(e) => handleInputChange('myGender', e.target.value)}
                        className="mr-2 border-[#7a7a7a]"
                      />
                      남자
                    </label>
                    <label className="flex items-center text-sm text-[#7a7a7a]">
                      <input
                        type="radio"
                        name="myGender"
                        value="여자"
                        checked={formData.myGender === '여자'}
                        onChange={(e) => handleInputChange('myGender', e.target.value)}
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
                    value={formData.myGrade}
                    onChange={(e) => handleInputChange('myGrade', e.target.value)}
                    className="
                      w-109 h-6 px-1 border border-[#7A7A7A] rounded-[5px] 
                      text-[#7A7A7A] text-sm
                      focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    value={formData.myAge}
                    onChange={(e) => handleInputChange('myAge', e.target.value)}
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
                    value={formData.myMbti}
                    onChange={(e) => handleInputChange('myMbti', e.target.value)}
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
                    value={formData.applicationSemester}
                    onChange={(e) => handleInputChange('applicationSemester', e.target.value)}
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
                              ${formData.desiredRoom === letter 
                                ? 'bg-[#4b7eff] text-white border-[#4b7eff]' 
                                : 'border-[#7a7a7a] text-[#7a7a7a] hover:bg-gray-50'
                              }
                            `}
                            onClick={() => handleInputChange('desiredRoom', letter)}
                          >
                            {letter}
                          </button>
                        ))}
                      </div>
                      <div className="flex">
                        {/* 호실 번호 입력 필드 */}
                        <input
                          type="text"
                          value={formData.desiredRoom.replace(/[GIS]/g, '')}
                          onChange={(e) => {
                            const letter = formData.desiredRoom.match(/[GIS]/)?.[0] || '';
                            const number = e.target.value;
                            handleInputChange('desiredRoom', letter + number);
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
                      onClick={toggleCurrentlyResiding}
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
                      value={formData.mySleepStart}
                      onChange={(e) => handleInputChange('mySleepStart', e.target.value)}
                      placeholder="21:00"
                      className="w-full h-6 px-2 border border-[#7a7a7a] rounded-[5px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  
                    <span className="text-black font-thin text-lg mx-[10px]">~</span>
                  
                    <img src="/post icons/sun.svg" alt="half-moon" className="w-4 h-4 mr-[3px]" />
                    <input 
                      type="text"
                      value={formData.mySleepEnd}
                      onChange={(e) => handleInputChange('mySleepEnd', e.target.value)}
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
                        checked={formData.mySnoring === '있어요'}
                        onChange={(e) => handleInputChange('mySnoring', e.target.value)}
                        className="mr-2"
                      />
                      있어요
                    </label>
                    <label className="flex items-center text-sm text-[#7a7a7a]">
                      <input
                        type="radio"
                        name="mySnoring"
                        value="없어요"
                        checked={formData.mySnoring === '없어요'}
                        onChange={(e) => handleInputChange('mySnoring', e.target.value)}
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
                        checked={formData.myTeethGrinding === '있어요'}
                        onChange={(e) => handleInputChange('myTeethGrinding', e.target.value)}
                        className="mr-2"
                      />
                      있어요
                    </label>
                    <label className="flex items-center text-sm text-[#7a7a7a]">
                      <input
                        type="radio"
                        name="myTeethGrinding"
                        value="없어요"
                        checked={formData.myTeethGrinding === '없어요'}
                        onChange={(e) => handleInputChange('myTeethGrinding', e.target.value)}
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
                        checked={formData.mySmoking === '해요'}
                        onChange={(e) => handleInputChange('mySmoking', e.target.value)}
                        className="mr-2"
                      />
                      해요
                    </label>
                    <label className="flex items-center text-sm text-[#7a7a7a]">
                      <input
                        type="radio"
                        name="mySmoking"
                        value="안해요"
                        checked={formData.mySmoking === '안해요'}
                        onChange={(e) => handleInputChange('mySmoking', e.target.value)}
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
                        checked={formData.myRefrigerator === '있어요'}
                        onChange={(e) => handleInputChange('myRefrigerator', e.target.value)}
                        className="mr-2"
                      />
                      있어요
                    </label>
                    <label className="flex items-center text-sm text-[#7a7a7a]">
                      <input
                        type="radio"
                        name="myRefrigerator"
                        value="없어요"
                        checked={formData.myRefrigerator === '없어요'}
                        onChange={(e) => handleInputChange('myRefrigerator', e.target.value)}
                        className="mr-2"
                      />
                      없어요
                    </label>
                  </div>
                </div>

                {/* 냉장고 */}
                <div className="flex items-center">
                  <label className="block w-full text-sm font-semibold text-black">
                    WIFI<span className="text-[#ff0000] ml-[1px]">*</span>
                  </label>
                  <div className="w-113 h-6 grid grid-cols-2 border border-white rounded-[5px]">
                    <label className="flex items-center text-sm text-[#7a7a7a]">
                      <input
                        type="radio"
                        name="myRefrigerator"
                        value="있어요"
                        checked={formData.myRefrigerator === '있어요'}
                        onChange={(e) => handleInputChange('myRefrigerator', e.target.value)}
                        className="mr-2"
                      />
                      있어요
                    </label>
                    <label className="flex items-center text-sm text-[#7a7a7a]">
                      <input
                        type="radio"
                        name="myRefrigerator"
                        value="없어요"
                        checked={formData.myRefrigerator === '없어요'}
                        onChange={(e) => handleInputChange('myRefrigerator', e.target.value)}
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
                    value={formData.myOther}
                    onChange={(e) => handleInputChange('myOther', e.target.value)}
                    placeholder="ex) 저는 벌레를 잘 잡습니다."
                    className="w-109 px-1 h-6 text-xs border border-[#7a7a7a] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex justify-center mt-[10px]">
                <button
                type="submit"
                className="w-50 h-7 text-sm bg-[#4b7eff] hover:bg-blue-700 text-white font-semibold rounded-[10px] transition duration-200"
                >
                내가 원하는 룸메 정보 입력하기
                </button>
                </div>
              </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}
