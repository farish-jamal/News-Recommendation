"use client";

import {
 Dialog,
 DialogContent,
 DialogHeader,
 DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { GithubIcon, SlackIcon } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

const LoginDialog: React.FC = () => {

 return (
  <Dialog>
   <DialogTrigger className="w-16 border border-black text-black py-2 rounded-md bg-transparent hover:bg-black hover:text-white transition duration-200">
    Login
   </DialogTrigger>
   <DialogContent>
   <DialogTitle>Welcome back</DialogTitle>
    <DialogHeader className="space-y-3 mt-5">
      <Button onClick={() => signIn("github")}>Sign In With Github <GithubIcon /></Button>
     <p className="text-center">OR</p>
     <Button onClick={() => signIn("github")}>Sign In With Google <SlackIcon /></Button>
       
    </DialogHeader>
   </DialogContent>
  </Dialog>
 );
};

export default LoginDialog;
