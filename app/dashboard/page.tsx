import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <UserButton />
      <Button variant={"secondary"}>This is Dashboard</Button>
    </div>
  );
};

export default Dashboard;
