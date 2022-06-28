import React from "react";
import { Input } from "../components/Input";
import { Button } from "./Button";

function Shipping() {
  return (
    <div className="w-4/6 m-2">
      <div className="flex">Shipping Address</div>
      <div className="bg-[#D9D9D9] mb-5">
        <div className="p-5">
          <div className="mb-4 font-normal">
            <Input
              type="text"
              placeholder="Street"
              id="input-street" /*value={email} onChange={(e) => setEmail({ email: e.target.value })}*/
            />
          </div>
          <div className="mb-4 font-normal">
            <Input
              type="text"
              placeholder="City"
              id="input-city" /*value={email} onChange={(e) => setEmail({ email: e.target.value })}*/
            />
          </div>
          <div className="mb-4 font-normal">
            <select className="w-full bg-white text-gray-400 border-2 border-[#4F826F] focus:border-[#4F826F] focus:ring-1 focus:ring-[#4F826F] p-1 pl-3">
              <option selected>State/Province</option>
              <option value="JT">Jawa Tengah</option>
              <option value="JB">Jawa Barat</option>
              <option value="JK">Jakarta</option>
              <option value="JTM">Jawa Timur</option>
            </select>
          </div>
          <div className="mb-4 font-normal">
            <Input
              type="text"
              placeholder="Zip Code"
              id="input-zip" /*value={email} onChange={(e) => setEmail({ email: e.target.value })}*/
            />
          </div>
        </div>
      </div>
      <div className="flex">Credit Card</div>
      <div className="bg-[#D9D9D9] mb-5">
        <div className="p-5">
          <div className="mb-4 font-normal flex">
            <select className="w-1/6 bg-white text-gray-400 border-2 border-[#4F826F] focus:border-[#4F826F] focus:ring-1 focus:ring-[#4F826F] p-1 pl-3">
              <option selected>Visa</option>
              <option value="Mandiri">Mandiri</option>
              <option value="BCA">BCA</option>
              <option value="BNI">BNI</option>
              <option value="OCBC">OCBC NISP</option>
            </select>
          </div>
          <div className="mb-4 font-normal">
            <Input
              type="text"
              placeholder="Name Card"
              id="input-Card" /*value={email} onChange={(e) => setEmail({ email: e.target.value })}*/
            />
          </div>
          <div className="mb-4 font-normal">
            <div className="flex justify-between">
              <div className="w-4/5 mr-2">
                <Input
                  type="text"
                  placeholder="Card Number"
                  id="input-cardNumber" /*value={email} onChange={(e) => setEmail({ email: e.target.value })}*/
                />
              </div>
              <div className="w-1/5">
                <Input
                  type="text"
                  placeholder="CYY2 Number"
                  id="input-cyy" /*value={email} onChange={(e) => setEmail({ email: e.target.value })}*/
                />
              </div>
            </div>
          </div>
          <div className="mb-4 font-normal">
            <div className="flex flex-row">
              <div className="basis-1/2 mr-0">
                <p>Expiration Date :</p>
              </div>
              <div className="basis-1/2 mr-2">
                <select className="w-full bg-white text-gray-400 border-2 border-[#4F826F] focus:border-[#4F826F] focus:ring-1 focus:ring-[#4F826F] p-1 pl-3">
                  <option selected>Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="September">September</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
              <div className="basis-1/2">
                <select className="w-full bg-white text-gray-400 border-2 border-[#4F826F] focus:border-[#4F826F] focus:ring-1 focus:ring-[#4F826F] p-1 pl-3">
                  <option selected>Year</option>
                  <option value="Mandiri">2020</option>
                  <option value="BCA">2022</option>
                  <option value="BNI">2024</option>
                  <option value="OCBC">2025</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">Review Order</div>
      <div className="bg-[#D9D9D9] mb-4">
        <div className="p-5 flex flex-col items-start">
          <div>
            <p>Total Quantity : 4</p>
          </div>
          <div>
            <p>Shipping Fee : FREE</p>
          </div>
          <div>
            <p>Total Price: $300</p>
          </div>
        </div>
      </div>
      <div className="w-1/6 mb-2 ml-auto">
        <Button
          label="PURCHASE" /*onClick={() => handleSubmit()} disabled={email.length === 0 || password.length === 0}*/
        />
      </div>
    </div>
  );
}

export default Shipping;
