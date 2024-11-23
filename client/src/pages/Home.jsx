import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <header className="mb-12">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-64 md:h-96 bg-gray-200 rounded-lg shadow-lg"
        >
          <SwiperSlide>
            <img
              src="/img/7.jpg"
              alt="Banner 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/8.jpg"
              alt="Banner 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/9.jpg"
              alt="Banner 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </header>

      <section className="flex-grow flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 max-w-xs mx-auto">
            <img
              src="/img/4.jpg"
              alt="Tênis Casual Run"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Tênis Casual Run</h3>
            <p className="text-gray-600 mt-2">Tênis casual confortável para o dia a dia.</p>
            <Link
              to="/products"
              className="mt-4 inline-block px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-700 transition"
            >
              Ver Tênis
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 max-w-xs mx-auto">
            <img
              src="/img/6.jpg"
              alt="Tênis Esportivo"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Tênis Esportivo</h3>
            <p className="text-gray-600 mt-2">Ideal para esportes e atividades físicas.</p>
            <Link
              to="/products"
              className="mt-4 inline-block px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-700 transition"
            >
              Ver Tênis
            </Link>
          </div>
        </div>
      </section>

      <footer className="text-center bg-black text-white py-6 rounded-lg mt-12 shadow-lg">
        <p className="text-sm">&copy; 2024 Loja de Tênis Online. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
