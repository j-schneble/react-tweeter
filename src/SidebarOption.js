import React from "react";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className='flex items-center ml-20 p-4 space-x-4 hover:bg-gray-200 cursor-pointer rounded-xl'>
  {Icon && <Icon className="h-10 w-10 cursor-pointer text-black" />}
      <h2 className='text-lg font-bold'>{text}</h2>
    </div>
  );
}

export default SidebarOption;
