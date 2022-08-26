import React from "react";

const ContainerSimpleCards = ({children}) => {
  return (
    <div className="w-full  mx-auto flex flex-wrap items-center justify-center gap-4 pt-4 mt-2">
      {children}
    </div>
  );
};

export default ContainerSimpleCards;
