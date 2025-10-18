import Image from "next/image";
import { Button } from "@/components/ui/button.jsx";
import { UserButton } from "@stackframe/stack";
export default function Home() {
  return (
    <div>
      <h2> This is new page of next js!</h2>
      <Button variant= {'destructive'}> Daddy is in Peak</Button>
      <UserButton/>
    </div>
      
  );
}
