type LogoProps = {
  size?: number;        
  className?: string;   
};

export default function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <img
      src="/sa_logo.png"
      alt="StreamFlow"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}