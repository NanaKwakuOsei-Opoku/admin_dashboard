import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { Button } from "../ui/button";
import Image from 'next/image';

interface ImageUploadProps {
    value: string[];
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    onRemove,
    value,
}) => {

    const onUpload = (result: { info?: { secure_url?: string } | string }) => {
        if (result.info && typeof result.info !== 'string' && result.info.secure_url) {
            onChange(result.info.secure_url);
        }
    };

    return (
        <div>
            <div className="mb-4 flex flex-wrap items-center gap-4">
                {value.map((url) => (
                    <div key={url} className="relative w-32 h-32">
                        <Image
                            src={url}
                            alt="collection"
                            layout="fill"
                            objectFit="cover"
                            className="object-cover rounded-lg"
                        />
                        <Button onClick={() => onRemove(url)} className="absolute top-0 right-0 bg-red-500 text-white">
                            Remove
                        </Button>
                    </div>
                ))}
            </div>

            <CldUploadWidget uploadPreset="kjnqa0yw" onUpload={onUpload}>
                {({ open }) => (
                    <Button onClick={() => open()} className="bg-grey-1 text-white">
                        Upload an Image
                    </Button>
                )}
            </CldUploadWidget>
        </div>
    );
};

export default ImageUpload;