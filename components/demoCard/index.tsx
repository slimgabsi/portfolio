import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DemoCardProps {
  title: string;
  imageSrc: string;
  alt: string;
  link: string;
}

export const DemoCard = ({ title, imageSrc, alt, link }: DemoCardProps) => {
  return (
    <Card className="md:w-1/4 sm:w-full">
      <CardHeader>
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageSrc}
            alt={alt}
            width={400}
            height={400}
            className="w-full"
          />
        </a>
      </CardContent>
    </Card>
  );
};

export const CcvCard = () => {
  return (
    <Card className="md:w-1/4  sm:w-full">
      <CardContent>
        <Image src="/ccv.png" alt="ccv" width={200} height={200} />
      </CardContent>
    </Card>
  );
};
