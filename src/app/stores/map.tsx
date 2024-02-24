import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Image from "next/image";

export default function Map() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="relative left-1/2 my-6 -translate-x-1/2 rounded-full p-6 text-lg font-semibold md:p-7">
          See Map
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-h-dvh sm:max-w-lg">
        <div className="mt-8 space-y-12">
          <Image
            className="mb-auto"
            src="/images/crystal-mall-ground-level.jpeg"
            alt="Crystal Mall Ground Level"
            width={800}
            height={400}
          />
          <Image
            className="mb-auto"
            src="/images/crystal-mall-second-floor.jpeg"
            alt="Crystal Mall Second Floor"
            width={800}
            height={400}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
