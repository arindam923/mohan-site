import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";

import { toast } from "sonner";

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="px-8 py-2 bg-purple-600 text-white text-sm rounded-md font-semibold">
            <span>Let&apos;s Talk</span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Let&apos;s talk about your project</DialogTitle>
            <DialogDescription>
              Let&apos;s discuss your project in detail here or you can set up a
              meet for latar so we can assist you at the best of our abilities
            </DialogDescription>
          </DialogHeader>
          <ProfileForm setOpen={setOpen} className={""} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="px-8 py-2 bg-purple-600 text-white text-sm rounded-md font-semibold">
          <span>Let&apos;s Talk</span>
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Let&apos;s talk about your project</DrawerTitle>
          <DrawerDescription>
            Let&apos;s discuss your project in detail here or you can set up a
            meet for latar so we can assist you at the best of our abilities
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm setOpen={setOpen} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

type ProfileFormProps = {
  className: string;
  setOpen: (open: boolean) => void;
};

function ProfileForm({ className, setOpen }: ProfileFormProps) {
  const onSubmit = () => {
    setOpen(false);
    toast("Your request successfullly submitted", {
      description:
        "Your Request have been submitted and very soon one of our executive call you about how to proceeds further steps",
      unstyled: true,
      classNames: {
        toast: "bg-zinc-900 p-4 rounded-md",
        title: "text-primary text-sm",
        description: "text-red-400 text-xs",
        actionButton: "bg-neutral-900",
        cancelButton: "bg-orange-400",
        closeButton: "bg-lime-400",
      },
    });
  };

  return (
    <form action={onSubmit} className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="prodect">Project Description</Label>
        <Textarea id="project" />
      </div>

      <div className="flex items-center space-x-2  font-semibold     text-xs">
        <Checkbox />
        <p>
          Setup an <span className="text-primary">call? </span>
        </p>
      </div>

      <Button type="submit">Save</Button>
    </form>
  );
}
