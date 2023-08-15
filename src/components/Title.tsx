type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return <h1 className="block mt-4 text-3xl font-medium">{text}</h1>;
}
