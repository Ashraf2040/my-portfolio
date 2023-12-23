

const ProjectTags = ({name,isSelected,onClick}) => {

const buttonStyle = isSelected ? "text-white border-purple-500":"text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button onClick={()=>onClick(name)} className={`rounded-full border-2 ${buttonStyle} px-6 py-3 text-xl  cursor-pointer `}>{name}</button>
  )
};

export default ProjectTags
