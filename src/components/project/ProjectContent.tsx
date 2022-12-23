import React, { useState } from "react";

const ProjectContent = (props: any) => {
  const [isImageVisible, setIsImageVisible] = useState(true);

  const onMouseImageEnter = () => {
    setIsImageVisible(false);
  };

  const onMouseImageLeave = () => {
    setIsImageVisible(true);
  };

  const renderContent = () => {
    if (isImageVisible) {
      return (
        <div className="px-8 py-10 relative h-full w-full border-4 border-gray-800 bg-gray-900 items-center">
          <img
            alt="gallery"
            className="flex flex-1 m-auto"
            src={props.project.image}
            onMouseEnter={onMouseImageEnter}
            style={{ zIndex: isImageVisible ? 0 : -1000 }}
          />
        </div>
      );
    } else {
      return (
        <div
          onMouseLeave={onMouseImageLeave}
          className="px-8 py-10 relative h-full w-full border-4 border-gray-800 bg-gray-900"
        >
          <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
            {props.project.subtitle}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {props.project.title}
          </h1>
          <p className="leading-relaxed">{props.project.description}</p>
        </div>
      );
    }
  };

  return renderContent();
};

export default ProjectContent;
