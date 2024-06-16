import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ title, desc, image, id }) {
  return (
    <div
      className="min-h-0 md:min-h-[482px] bg-white text-slate-700 shadow-sm border-2 border-slate-100 rounded-2xl flex flex-col items-center p-5"
      data-aos="zoom-in"
    >
      <div className="w-full h-[208px] bg-purple-light-200 rounded-2xl overflow-hidden flex items-center justify-center">
        <img src={image} alt="image" className="w-full h-full object-cover object-center" />
      </div>
      <h4 className="text-slate-700 font-bold mt-5">{title}</h4>
      <p className="text-slate-500 text-sm text-justify leading-relaxed mt-4 line-clamp-4">{desc}</p>
      <Link
        to={`/artikel/${id}`}
        className="text-center bg-white border-2 border-purple-light px-4 py-2 rounded-md text-purple-light w-full mt-5 hover:bg-purple-semi-dark hover:text-white"
      >
        Baca Selengkapnya
      </Link>
    </div>
  );
}

export default ArticleCard;
