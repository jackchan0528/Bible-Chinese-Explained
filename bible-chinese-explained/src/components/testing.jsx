import React, { Component, useState, useEffect } from "react";

const Testing = () => {
  return (
    <div className="bg-[#F2AA7E]">
      <h1 className="text-xl font-bold">列出聖經經文</h1>
      <h2 className="text-left font-bold text-xl bg-[#FACFAD]">Hi</h2>
      <div className="relative px-2 py-2 w-1/3 lg:max-w-sm snap-center">
        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
          <option>ReactJS Dropdown</option>
          <option>Laravel 9 with React</option>
          <option>React with Tailwind CSS</option>
          <option>React With Headless UI</option>
        </select>
      </div>
    </div>
  );
};

export default Testing;
