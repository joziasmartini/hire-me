type SubtitleProps = {
  text: string;
};

export default function Subtitle({ text }: SubtitleProps) {
  return <span className="block text-neutral-500">{text}</span>;
}
