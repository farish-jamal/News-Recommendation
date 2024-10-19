"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const LoginDialog = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
   setLoading(true);
    console.log(email);
    if(email.length == 0 || password.length == 0){
      toast("Please fill all fields.")
      setLoading(false);
      return;
    }
  }

  return (
    <Dialog>
      <DialogTrigger>Login</DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-5">
          <DialogTitle>Welcome Back!</DialogTitle>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          {!loading ? (
            <Button onClick={handleSubmit}>Login</Button>
          ) : (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
