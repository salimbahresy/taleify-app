import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

function Article() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [article, setArticle] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios.get(`https://635b3d50aa7c3f113db88e01.mockapi.io/blogs/${id}`).then((res) => {
      setData(res.data);
    });
  }, [location]);

  useEffect(() => {
    axios.get(`https://635b3d50aa7c3f113db88e01.mockapi.io/blogs`).then((res) => {
      setArticle(res.data);
    });
  }, [location]);

  const htmlString = `${data?.content}`;
  const content = HTMLReactParser(htmlString);
  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      <Navbar />
      <section id="article" className="bg-purple-light-50 w-full">
        <div className="container-fluid bg-cover bg-center" style={{ backgroundImage: 'url("/background5.png")' }}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-9 pt-28 pb-14 md:px-9 md:pt-24 md:pb-14 lg:px-9 lg:pt-32 lg:pb-14">
            <div className="col-span-1 lg:col-span-2" id="artikel">
              <div className="w-full h-[200px] md:h-[392px] lg:h-[392px] rounded-xl overflow-hidden relative">
                <img src={data?.image} alt="literation.jpg" className="object-center object-cover h-full w-full" />
              </div>
              <h1 className="text-xl md:text-4xl lg:text-4xl text-slate-700 font-bold leading-relaxed my-5">
                {data?.title}
              </h1>
              <div className="text-slate-500 text-xs md:text-base desc">{content && content}</div>
            </div>
            <div className="" id="rekomendasi">
              <h4 className="text-xl md:text-2xl lg:text-base text-slate-700 font-bold mb-4 text-center lg:text-start">
                Artikel Lainnya
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                {article &&
                  article
                    .slice(0, 5)
                    .filter((el) => el?.id != id)
                    .map((el, index) => {
                      return (
                        <div className="min-h-[281px] bg-white rounded-lg p-4">
                          <div className="min-h-[153px] max-h-[153px] w-full overflow-hidden rounded-lg flex item-center justify-center">
                            <img src={el?.image} alt={el?.image} className="object-center object-cover h-full w-full" />
                          </div>
                          <Link to={`/artikel/${el?.id}`} className="text-slate-700 hover:text-purple-semi-dark">
                            <h4 className="font-bold mt-4">{el.title}</h4>
                          </Link>
                          <h4 className="text-slate-500 mt-2 text-xs md:text-base line-clamp-1">{el?.desc}</h4>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Article;
