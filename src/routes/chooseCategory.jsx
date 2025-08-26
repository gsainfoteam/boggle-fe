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
  const [step, setStep] = React.useState('category'); // 'category' 또는 'form'

  const categories = [
    { id: 'ROOMMATE', name: '룸메이트', icon: '🏠', color: 'bg-[#e5edfa]' },
    { id: 'STUDY', name: '스터디', icon: '📚', color: 'bg-[#e5edfa]' },
    { id: 'GROUP_PURCHASE', name: '공동구매', icon: '🛒', color: 'bg-[#e5edfa]' },
    { id: 'OTHER', name: '/', icon: '🚚', color: 'bg-[#e5edfa]' },
  ];

  const handleCategorySelect = (categoryId) => {
    setType(categoryId);
    // 모든 카테고리의 색상을 초기화
    categories.forEach(cat => cat.color = 'bg-[#4b7eff]');
    // 선택된 카테고리만 파란색으로 변경
    const selectedCategory = categories.find(cat => cat.id === categoryId);
    if (selectedCategory) {
      selectedCategory.color = 'bg-[#4b7eff]';
    }
  };

  const handleNext = () => {
    if (type) {
      setStep('form');
    }
  };

  // 카테고리 선택 단계
  if (step === 'category') {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-[20px] font-bold mb-[20px] text-center">
            카테고리를 선택하세요
          </h1>
          
          <div className="grid grid-cols-2 gap-[10px] mb-20">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`
                  w-[120px] h-[120px] ${category.color} rounded-[10px]
                  flex flex-col items-center justify-center gap-2
                  text-white transition-all duration-200 hover:scale-105
                  ${type === category.id ? 'ring-4 ring-blue-300' : ''}
                `}
              >
                <span className="text-3xl">{category.icon}</span>
                <span className="text-lg font-semibold">{category.name}</span>
              </button>
            ))}
          </div>
          
          <button
            onClick={handleNext}
            disabled={!type}
            className={`
              px-8 py-3 h-[36px] rounded-lg font-medium transition-all duration-200
              ${type 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            다음
          </button>
        </div>
      </Layout>
    );
  }
}
