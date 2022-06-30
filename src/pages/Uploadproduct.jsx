import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { apiRequest } from "../utils/apiRequest";
import { withRouter } from "../utils/navigations";

function Uploadproduct() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product_name, setProductName] = useState("");
  const [product_picture, setProductPicture] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [objSubmit, setObjSubmit] = useState("");

  // useEffect(() => {
  //   if (product_name && product_picture && price && qty && category && description) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // }, [product_name, product_picture, price, qty, category, description]);

  const handleAddProduct = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    apiRequest("products", "post", objSubmit, "multipart/form-data")
      .then((res) => {
        alert("List Added");
        setObjSubmit({});
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => setLoading(false));
    // setLoading(true);
    // e.preventDefault();
    // const body = {
    //   product_name,
    //   product_picture,
    //   category,
    //   qty,
    //   price,
    //   description,
    // };
    // apiRequest("/products", "post", body)
    //   .then((res) => {
    //     alert("Produk Berhasil Ditambahkan!");
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   })
    //   .finally(() => setLoading(false));
  };
  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
    console.log(temp);
  };

  return (
    <Layout>
      <div className="w-full flex flex-col justify-center mb-16">
        <p className="self-center my-10 font-bold text-2xl">Upload Produk Anda</p>
        <form className="w-2/3 self-center font-normal bg-[#F2F2F0] p-6" onSubmit={(e) => handleAddProduct(e)}>
          <div className="mb-4">
            <Input type="text" placeholder="Nama Produk" value={product_name} onChange={(e) => handleChange(e.target.value, "product_name")} />
          </div>
          <div className="my-4">
            <Input type="text" placeholder="Gambar Produk (Link)" value={product_picture} onChange={(e) => handleChange(e.target.value, "product_picture")} />
          </div>
          <div className="my-4">
            <Input type="text" placeholder="Kategori" value={category} onChange={(e) => handleChange(e.target.value, "category")} />
          </div>
          {/* <div className="my-4">
            <select type="text" placeholder="Kategori Produk" className="w-full bg-white font-ubuntu text-[#040404] border border-[#4F826F] focus:border-[#4F826F] focus:ring-1 focus:ring-[#4F826F] p-1 pl-3">
              <option>Kategori Produk</option>
              <option value="komputer" onSelect={(e) => setCategory(e.target.value, "category")}>
                komputer
              </option>
              <option value="pc">PC</option>
              <option value="monitor">Monitor</option>
              <option value="ram">RAM</option>
            </select>
          </div> */}
          <div className="my-4">
            <Input type="number" placeholder="Harga Produk" value={price} onChange={(e) => handleChange(e.target.value, "price")} />
          </div>
          <div className="my-4">
            <Input type="number" placeholder="Jumlah Produk" value={qty} onChange={(e) => handleChange(e.target.value, "qty")} />
          </div>
          <div className="my-4">
            <Input
              placeholder="Deskripsi Produk"
              type="text"
              /*className="w-full bg-white text-[#040404] border border-[#4F826F] focus:border-[#4F826F] focus:ring-1 focus:ring-[#4F826F] p-1 pl-3"*/
              value={description}
              onChange={(e) => handleChange(e.target.value, "desciption")}
            />
          </div>
          <div className="mt-4">
            <Button id="btn-submit-add-product" label="SUBMIT" />
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default withRouter(Uploadproduct);
