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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('폼 데이터:', formData)
    // 여기에 API 호출 로직 추가
  }

  return (
    <Layout>
      <div className="bg-amber-500 h-screen w-full pt-[40px] flex flex-col items-center">
        <div className="bg-amber-300 text-xl font-bold text-center text-gray-800 font-extrabold mb-6">
          룸메를 구합니다.
        </div>
          
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg">
          <div className="flex justify-evenly w-[860px]">
            {/* 내 정보 입력하기 */}
            <div className="space-y-3 w-[40%] flex flex-col">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">내 정보 입력하기</h2>
                
                {/* 성별 */}
                <div className="flex items-center justify-center gap-[10px]">
                  <label className="block w-full items-center text-m font-semibold text-black">
                    성별 <span className="text-red-500 items-center">*</span>
                  </label>
                  <div className="w-145 h-8 grid grid-cols-2 border border-white rounded-[5px]">
                    <label className="flex items-center text-[#7a7a7a] ">
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
                    <label className="flex items-center text-[#7a7a7a]">
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
                  <label className="w-full text-m font-semibold text-black">
                    학년 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.myGrade}
                    onChange={(e) => handleInputChange('myGrade', e.target.value)}
                    className="block w-124.5 h-8 px-3 border border-[#7A7A7A] text-[#7A7A7A] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
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
                  <label className="block w-full text-m font-semibold text-black">
                    나이 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.myAge}
                    onChange={(e) => handleInputChange('myAge', e.target.value)}
                    className="w-124.5 px-3 h-8 border border-[#7A7A7A] text-[#7A7A7A] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select option...</option>
                    {Array.from({length: 30}, (_, i) => i + 18).map(age => (
                      <option key={age} value={age}>{age}세</option>
                    ))}
                  </select>
                </div>

                {/* MBTI */}
                <div className="flex items-center">
                  <label className="block w-full text-m font-semibold text-black">
                    MBTI
                  </label>
                  <select
                    value={formData.myMbti}
                    onChange={(e) => handleInputChange('myMbti', e.target.value)}
                    className="w-124.5 h-8 px-3 border border-[#7A7A7A] text-[#7A7A7A] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                {/* 원하는 호실 */}
                <div className="flex items-center">
                  <label className="block w-full text-m font-semibold text-black">
                    원하는 호실
                  </label>
                  <div className="flex items-center gap-[4px]">
                    <div className="flex space-x-[2px]">
                      {/* G, I, S, T 버튼들 */}
                      {['G', 'I', 'S', 'T'].map((letter) => (
                        <button
                          key={letter}
                          type="button"
                          className="w-8 h-8 border border-[#7a7a7a] rounded-[10px] text-[#7a7a7a] text-l  font-bold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          onClick={() => {
                            const currentValue = formData.desiredRoom || '';
                            handleInputChange('desiredRoom', newValue);
                          }}
                        >
                          {letter}
                        </button>
                      ))}
                      </div>
                      <div className="flex">
                      {/* 호실 번호 입력 필드 */}
                      <input
                        type="text"
                        value={formData.desiredRoom}
                        onChange={(e) => handleInputChange('desiredRoom', e.target.value)}
                        placeholder="ex) 123"
                        className="w-18 h-8 px-3 border border-[#7a7a7a] rounded-[5px] text-[#7a7a7a] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* 신청학기 */}
                <div className="flex items-center">
                  <label className="block w-full text-m font-semibold text-black">
                    신청학기
                  </label>
                  <select
                    value={formData.applicationSemester}
                    onChange={(e) => handleInputChange('applicationSemester', e.target.value)}
                    className="w-124.5 px-3 h-8 border border-[#7A7A7A] text-[#7A7A7A] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select option...</option>
                    <option value="2024-1">2024년 1학기</option>
                    <option value="2024-2">2024년 2학기</option>
                    <option value="2025-1">2025년 1학기</option>
                    <option value="2025-2">2025년 2학기</option>
                  </select>
                </div>

                {/* 수면시간 */}
                <div className="flex items-center">
                  <label className="block w-full text-m font-semibold text-black">
                    수면시간  
                  </label>
                  <div className="w-134 h-8 flex justify-between items-center border border-white rounded-[5px]">
                      <img src="/post icons/moon.svg" alt="half-moon" className="w-4 h-4 mr-[3px]" />
                      <input className="w-full h-8 px-2 border border-[#7a7a7a] rounded-[5px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    
                      <span className="text-black font-thin text-lg mx-[5px]">~</span>
                    
                      <img src="/post icons/sun.svg" alt="half-moon" className="w-4 h-4 mr-[3px]" />
                      <input className="w-full h-8 px-2 border border-[#7a7a7a] rounded-[5px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                  </div>  
                </div>

                {/* 냉장고 */}
                <div className="flex items-center">
                  <label className="block w-full text-m font-semibold text-black">
                    냉장고
                  </label>
                  <div className="w-134 h-8 grid grid-cols-2 border border-white rounded-[5px]">
                    <label className="flex items-center text-[#7a7a7a]">
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
                    <label className="flex items-center text-[#7a7a7a]">
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

                {/* 코골이 */}
                <div className="flex items-center">
                  <label className="block w-full text-m font-semibold text-black">
                    코골이
                  </label>
                  <div className="w-134 h-8 grid grid-cols-2 border border-white rounded-[5px]">
                    <label className="flex items-center text-[#7a7a7a]">
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
                    <label className="flex items-center text-[#7a7a7a]">
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
                  <label className="block w-full text-m font-semibold text-black">
                    이갈이
                  </label>
                  <div className="w-134 h-8 grid grid-cols-2 border border-white rounded-[5px]">
                    <label className="flex items-center text-[#7a7a7a]">
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
                    <label className="flex items-center text-[#7a7a7a]">
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
                  <label className="block w-full text-m font-semibold text-black">
                    담배
                  </label>
                  <div className="w-134 h-8 grid grid-cols-2 border border-white rounded-[5px]">
                    <label className="flex items-center text-[#7a7a7a]">
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
                    <label className="flex items-center text-[#7a7a7a]">
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
                    className="w-124.5 px-2 h-8 text-sm border border-[#7a7a7a] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
              type="submit"
              className="mt-8 w-full h-10 bg-[#4b7eff] hover:bg-blue-700 text-white font-semibold rounded-[10px] transition duration-200"
            >
              내가 원하는 룸메 정보 입력하기
            </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}
