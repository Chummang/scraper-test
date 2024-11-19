import React from 'react';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PdfViewer from '../components/PdfViewer'; 


const Dashboard = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <PdfViewer/>
    </div>
  );
};

export default Dashboard