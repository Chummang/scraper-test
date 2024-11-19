"use client";

import { useState } from 'react';

interface TableData {
  tableData: string[][];
}

export default function Home() {
  const [result, setResults] = useState<string[][]>([]);

  async function handleOnClick() {
    const response = await fetch('/api/scraper', {
      method: 'POST',
      body: JSON.stringify({
        siteUrl: 'https://www.sfc.hk/en/Rules-and-standards/Codes-and-guidelines/Codes'
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data: TableData = await response.json();
    setResults(data.tableData || []); // Assuming `tableData` is the key in the response
  }

  return (
    <main className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-8">Let&apos;s scrape something!</h1>
    
          <p className="mb-6">
            <button className="p-5 bg-blue-500 rounded-full" onClick={handleOnClick}>Get Started</button>
          </p>

          {result.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    {result[0].map((header, index) => (
                      <th key={index} className="py-2 px-4 border border-gray-300 bg-gray-100">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {result.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-100">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="py-2 px-4 border border-gray-300">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}