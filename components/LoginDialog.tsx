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

interface buttonType {
  type: "join" | "login";
}

const LoginDialog: React.FC<buttonType> = ({ type }) => {

  return (
    <Dialog>
      {type == "login" ? (
        <DialogTrigger className="w-16 border border-black text-black py-2 rounded-md bg-transparent hover:bg-black hover:text-white transition duration-200">
          Login
        </DialogTrigger>
      ) : (
       <DialogTrigger className="w-44 border border-black text-white py-2 rounded-md bg-black hover:bg-white hover:text-black transition duration-200">
       Join Now
     </DialogTrigger>     
      )}
      <DialogContent>
        {type == "login" ? (
          <DialogTitle className="text-center">Welcome back!</DialogTitle>
        ) : (
          <DialogTitle className="text-center">Happy to on-board you!</DialogTitle>
        )}
        <DialogHeader className="space-y-3">
          <Button onClick={() => signIn("github")}>
            Sign In With Github <GithubIcon />
          </Button>
          <p className="text-center">OR</p>
          <Button onClick={() => signIn("github")}>
            Sign In With Google <SlackIcon />
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
