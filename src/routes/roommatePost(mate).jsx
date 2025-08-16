import { createFileRoute } from '@tanstack/react-router'
import Layout from "../component/Layout";
import { useState } from 'react'

export const Route = createFileRoute('/roommatePost(mate)')({
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
      <div className="max-h-screen py-5 flex justify-center">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            룸메를 구합니다.
          </h1>
          
          <form onSubmit={handleSubmit} className="bg-white p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-evenly">
              
              {/* 내 정보 입력하기 */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">내 정보 입력하기</h2>
                
                {/* 성별 */}
                <div className="flex">
                  <label className="block w-full items-center text-m font-semibold text-black">
                    성별 <span className="text-red-500 items-center">*</span>
                  </label>
                  <div className="w-124.5 h-[30px] justify-start border border-[#7a7a7a] rounded-[5px] flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="myGender"
                        value="남자"
                        checked={formData.myGender === '남자'}
                        onChange={(e) => handleInputChange('myGender', e.target.value)}
                        className="mr-2"
                      />
                      남자
                    </label>
                    <label className="flex items-center">
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
                    className="block w-[200px] h-[30px] px-3 border border-[#7a7a7a] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select option...</option>
                    <option value="1학년">1학년</option>
                    <option value="2학년">2학년</option>
                    <option value="3학년">3학년</option>
                    <option value="4학년">4학년</option>
                    <option value="대학원">대학원</option>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    원하는 호실 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.desiredRoom}
                    onChange={(e) => handleInputChange('desiredRoom', e.target.value)}
                    placeholder="GIST ex) 123"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* 신청학기 */}
                <div className="flex items-center">
                  <label className="block w-full text-m font-semibold text-black">
                    신청학기 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.applicationSemester}
                    onChange={(e) => handleInputChange('applicationSemester', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  <div className="flex items-center space-x-2">
                    <input
                      type="time"
                      value={formData.mySleepStart}
                      onChange={(e) => handleInputChange('mySleepStart', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span>~</span>
                    <input
                      type="time"
                      value={formData.mySleepEnd}
                      onChange={(e) => handleInputChange('mySleepEnd', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>  
                </div>

                {/* 냉장고 */}
                <div className="flex items-center">
                  <label className="block w-full text-m font-semibold text-black">
                    냉장고
                  </label>
                  <div className="flex space-x-4 w-full">
                    <label className="flex items-center">
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
                    <label className="flex items-center">
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
                  <div className="flex space-x-4 w-full">
                    <label className="flex items-center">
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
                    <label className="flex items-center">
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
                  <div className="flex space-x-4 w-full">
                    <label className="flex items-center">
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
                    <label className="flex items-center">
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
                  <div className="flex space-x-4 w-full">
                    <label className="flex items-center">
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
                    <label className="flex items-center">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* 내가 원하는 룸메 정보 입력하기 */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">내가 원하는 룸메 정보 입력하기</h2>
                
                {/* 학년 */}
                <div className="flex items-center">
                  <label className="block w-full text-sm font-medium text-gray-700">
                    학년
                  </label>
                  <select
                    value={formData.preferredGrade}
                    onChange={(e) => handleInputChange('preferredGrade', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select option...</option>
                    <option value="1학년">1학년</option>
                    <option value="2학년">2학년</option>
                    <option value="3학년">3학년</option>
                    <option value="4학년">4학년</option>
                    <option value="대학원">대학원</option>
                  </select>
                </div>

                {/* 나이 */}
                <div className="flex items-center">
                  <label className="block w-full text-sm font-medium text-gray-700">
                    나이
                  </label>
                  <select
                    value={formData.preferredAge}
                    onChange={(e) => handleInputChange('preferredAge', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select option...</option>
                    {Array.from({length: 30}, (_, i) => i + 18).map(age => (
                      <option key={age} value={age}>{age}세</option>
                    ))}
                  </select>
                </div>

                {/* MBTI */}
                <div className="flex items-center">
                  <label className="block w-full text-sm font-medium text-gray-700">
                    MBTI
                  </label>
                  <select
                    value={formData.preferredMbti}
                    onChange={(e) => handleInputChange('preferredMbti', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                {/* 수면시간 */}
                <div className="flex items-center">
                  <label className="block w-full text-sm font-medium text-gray-700">
                    수면시간
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="time"
                      value={formData.preferredSleepStart}
                      onChange={(e) => handleInputChange('preferredSleepStart', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span>~</span>
                    <input
                      type="time"
                      value={formData.preferredSleepEnd}
                      onChange={(e) => handleInputChange('preferredSleepEnd', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* 코골이 */}
                <div className="flex items-center">
                  <label className="block w-full text-sm font-medium text-gray-700">
                    코골이
                  </label>
                  <div className="flex space-x-4 w-full">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredSnoring"
                        value="좋아요"
                        checked={formData.preferredSnoring === '좋아요'}
                        onChange={(e) => handleInputChange('preferredSnoring', e.target.value)}
                        className="mr-2"
                      />
                      좋아요
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredSnoring"
                        value="싫어요"
                        checked={formData.preferredSnoring === '싫어요'}
                        onChange={(e) => handleInputChange('preferredSnoring', e.target.value)}
                        className="mr-2"
                      />
                      싫어요
                    </label>
                  </div>
                </div>

                {/* 이갈이 */}
                <div className="flex items-center">
                  <label className="block w-full text-sm font-medium text-gray-700">
                    이갈이
                  </label>
                  <div className="flex space-x-4 w-full">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredTeethGrinding"
                        value="좋아요"
                        checked={formData.preferredTeethGrinding === '좋아요'}
                        onChange={(e) => handleInputChange('preferredTeethGrinding', e.target.value)}
                        className="mr-2"
                      />
                      좋아요
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredTeethGrinding"
                        value="싫어요"
                        checked={formData.preferredTeethGrinding === '싫어요'}
                        onChange={(e) => handleInputChange('preferredTeethGrinding', e.target.value)}
                        className="mr-2"
                      />
                      싫어요
                    </label>
                  </div>
                </div>

                {/* 담배 */}
                <div className="flex items-center">
                  <label className="block w-full text-sm font-medium text-gray-700">
                    담배
                  </label>
                  <div className="flex space-x-4 w-full">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredSmoking"
                        value="좋아요"
                        checked={formData.preferredSmoking === '좋아요'}
                        onChange={(e) => handleInputChange('preferredSmoking', e.target.value)}
                        className="mr-2"
                      />
                      좋아요
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredSmoking"
                        value="싫어요"
                        checked={formData.preferredSmoking === '싫어요'}
                        onChange={(e) => handleInputChange('preferredSmoking', e.target.value)}
                        className="mr-2"
                      />
                      싫어요
                    </label>
                  </div>
                </div>

                {/* 기타 */}
                <div className="flex items-center">
                  <label className="block w-full text-sm font-medium text-gray-700">
                    기타
                  </label>
                  <input
                    type="text"
                    value={formData.preferredOther}
                    onChange={(e) => handleInputChange('preferredOther', e.target.value)}
                    placeholder="ex) 마라탕을 좋아하시는 분"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* 작성완료 버튼 */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
              >
                작성완료
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}