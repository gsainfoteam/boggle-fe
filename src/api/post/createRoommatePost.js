/**
 * 룸메이트 포스트 생성 API
 * @param {Object} roommateDetails - 룸메이트 상세 정보
 * @returns {Promise<Object>} 생성된 포스트 데이터
 */
export async function createRoommatePost(roommateDetails) {
  try {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // 내 정보
        myGender: roommateDetails.myGender,
        myGrade: roommateDetails.myGrade,
        myAge: roommateDetails.myAge,
        myMbti: roommateDetails.myMbti,
        desiredRoom: roommateDetails.desiredRoom,
        applicationSemester: roommateDetails.applicationSemester,
        mySleepStart: roommateDetails.mySleepStart,
        mySleepEnd: roommateDetails.mySleepEnd,
        myRefrigerator: roommateDetails.myRefrigerator,
        mySnoring: roommateDetails.mySnoring,
        myTeethGrinding: roommateDetails.myTeethGrinding,
        mySmoking: roommateDetails.mySmoking,
        myOther: roommateDetails.myOther,
        isCurrentlyResiding: roommateDetails.isCurrentlyResiding,
        
        // 원하는 룸메 정보
        preferredGrade: roommateDetails.preferredGrade,
        preferredAge: roommateDetails.preferredAge,
        preferredMbti: roommateDetails.preferredMbti,
        preferredSleepStart: roommateDetails.preferredSleepStart,
        preferredSleepEnd: roommateDetails.preferredSleepEnd,
        preferredSnoring: roommateDetails.preferredSnoring,
        preferredTeethGrinding: roommateDetails.preferredTeethGrinding,
        preferredSmoking: roommateDetails.preferredSmoking,
        preferredOther: roommateDetails.preferredOther
      })
    });

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('룸메이트 포스트 생성 실패:', error);
    throw error;
  }
}
