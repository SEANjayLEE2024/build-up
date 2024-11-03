interface props {
  text: string;
}

const Title: React.FC<props> = ({ text }) => {
  return <p className="font-bold text-2xl pb-8 tracking-custom">{text}</p>;
};

export default Title;
