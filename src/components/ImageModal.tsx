import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ImageModalProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export const ImageModal = ({ src, alt, children }: ImageModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none">
        <div className="relative bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-lg border border-border overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};