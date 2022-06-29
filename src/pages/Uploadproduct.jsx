import React from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Layout from "../components/Layout";

function Uploadproduct() {
  return (
    <Layout>
      <div className="w-full flex flex-col justify-center mb-16">
        <p className="self-center my-10 font-bold text-2xl">Upload Produk Anda</p>
        <form className="w-2/3 self-center font-normal bg-[#F2F2F0] p-6">
          <div className="mb-4">
            <Input type="text" placeholder="Nama Produk" />
          </div>
          <div className="my-4">
            <Input type="text" placeholder="Gambar Produk (Link)" />
          </div>
          <div className="my-4">
            <select type="text" placeholder="Kategori Produk" className="w-full bg-white font-ubuntu text-[#040404] border border-[#4F826F] focus:border-[#4F826F] focus:ring-1 focus:ring-[#4F826F] p-1 pl-3">
              <option>Kategori Produk</option>
              <option value="pc">PC</option>
              <option value="monitor">Monitor</option>
              <option value="ram">RAM</option>
            </select>
          </div>
          <div className="my-4">
            <Input type="number" placeholder="Harga Produk" />
          </div>
          <div className="my-4">
            <Input type="number" placeholder="Jumlah Produk" />
          </div>
          <div className="my-4">
            <textarea placeholder="Deskripsi Produk" className="w-full bg-white text-[#040404] border border-[#4F826F] focus:border-[#4F826F] focus:ring-1 focus:ring-[#4F826F] p-1 pl-3" />
          </div>
          <div className="mt-4">
            <Button label="SUBMIT" />
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Uploadproduct;
