import { CldUploadWidget } from "next-cloudinary";
import { Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

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
    const onUpload = (result: any) => {
        console.log("Upload response:", result); // Log the full response
        if (result.info?.secure_url) {
            onChange(result.info.secure_url);
        } else {
            console.error("No secure_url in response:", result);
        }
    };

    return (
        <div>
            <div className="mb-4 flex flex-wrap items-center gap-4">
                {value.map((url) => (
                    url ? ( // Ensure `url` is valid
                        <div key={url} className="relative w-[200px] h-[200px]">
                            <div className="absolute top-0 right-0 z-10">
                                <Button
                                    type="button"
                                    onClick={() => onRemove(url)}
                                    size="sm"
                                    className="bg-red-500 text-white"
                                >
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </div>
                            <Image
                                src={url}
                                alt="Uploaded Image"
                                className="object-cover rounded-lg"
                                fill
                            />
                        </div>
                    ) : null // Do not render if URL is invalid
                ))}
            </div>

            <CldUploadWidget uploadPreset="kjnqa0yw" onUpload={onUpload}>
                {({ open }) => (
                    <Button
                        type="button"
                        onClick={() => open?.()} // Safely call open if it exists
                        className="bg-grey-1 text-white"
                    >
                        <Plus className="h-4 w-4 mr-2" />
                        Upload Image
                    </Button>
                )}
            </CldUploadWidget>
        </div>
    );
};

export default ImageUpload;
