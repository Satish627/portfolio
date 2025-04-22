import Image from 'next/image';
import React from 'react';

type Props = {
  skill: {
    title: string;
    image: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { image, title } = skill;

  return (
    <div className='p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900'>
      <Image
        src={image}
        alt={title}
        width={40}
        height={40}
        className='object-cover mx-auto mb-4'
      />
      <h3 className='text-white text-lg font-semibold'>{title}</h3>
    </div>
  );
};

export default SkillCard;
