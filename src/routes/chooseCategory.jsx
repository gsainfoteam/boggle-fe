import { createFileRoute, useRouter } from '@tanstack/react-router';
import Layout from '../component/Layout';
import React from 'react';

export const Route = createFileRoute('/chooseCategory')({
  component: ChooseCategoryComponent,
});
//export... 이 파일이 /write 경로에 대한 라우트임을 선언
//component = WriteComponent, 이 경로에 대한 컴포넌트 명을 WriteComponent로 지정

function ChooseCategoryComponent() {
  const router = useRouter();

  const [type, setType] = React.useState('');
//useState를 사용하여 상태관리. setType 함수를 통해 type 상태를 변경할 수 있음
  
  const categories = [
    { id: 'ROOMMATE', name: '룸메이트', icon: "/category-icons/roommateW.svg"},
    { id: 'STUDY', name: '스터디', icon: "/category-icons/studyB.svg"},
    { id: 'GROUP_PURCHASE', name: '공동구매', icon: "/category-icons/shoppingcartB.svg"},
    { id: 'OTHER', name: '/', icon: "/category-icons/deliveryvanB.svg"},
  ];

  const handleCategorySelect = (categoryId) => {setType(categoryId);};
    // 아래 onClick에 의해 handleCategotySelect함수가 실행.
    // '룸메이트'를 클릭하면 setType에 의해 type 상태가 ROOMMATE로 변경

  const handleNext = () => {
    if (type) {
      // 선택된 카테고리에 따라 다른 페이지로 이동
      switch (type) {
        case 'ROOMMATE':
          router.navigate({ to: '/roommatePost' });
          break;
        case 'STUDY':
          // 스터디 페이지로 이동 (나중에 구현)
          console.log('스터디 페이지로 이동');
          break;
        case 'GROUP_PURCHASE':
          // 공동구매 페이지로 이동 (나중에 구현)
          console.log('공동구매 페이지로 이동');
          break;
        case 'OTHER':
          // 기타 페이지로 이동 (나중에 구현)
          console.log('기타 페이지로 이동');
          break;
        default:
          console.log('알 수 없는 카테고리');
      }
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-[20px] font-bold mb-[20px] text-center">
          카테고리를 선택하세요
        </h1>
        
        <div className="grid grid-cols-2 gap-[10px] mb-20">
          {categories.map((category) => (
            //map ...categories 배열을 순회하면서 각 category를 처리
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`
                w-[120px] h-[120px] rounded-[10px]
                flex flex-col items-center justify-between pb-[5px]
                
                ${type === category.id ? 'bg-[#4b7eff] text-white' : 'bg-[#e5edfa] text-[#4b7eff]'}
              `}
            >
              {/* 각 버튼 이름표(key)를 category.id로 설정(id는 categories 배열에 있는 값)
            클릭하면 */}
              <div className="flex flex-col items-center justify-center"></div>
                <img 
                  src={category.icon} 
                  alt={category.name}
                  className="h-[40px]" 
                />
              {/* 바로 위 div는 between으로 아이콘 배치 예쁘게 하기 위함. */}
              <span className="text-lg font-semibold">{category.name}</span>
            </button>
          ))}
        </div>
        

        <button
          onClick={handleNext}
          disabled={!type}
          className={`
            h-[36px] w-[250px] rounded-[10px] font-bold
            ${type 
              ? 'bg-[#4b7eff] text-white cursor-pointer' 
              : 'bg-[#d9d9d9] text-white'
            }
          `}
        >
          다음
        </button>
      </div>
    </Layout>
  );
}
