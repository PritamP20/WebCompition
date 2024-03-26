import React from "react";
import SecondBg from "../assets/Bgs/CoursesBg.jpg";

const Third = () => {
  return (
    <div
      className="m-auto p-5 d-flex flex-column gap-5 vh-100 vw-100 align-content-center align-items-center"
      style={{
        backgroundImage: `url(${SecondBg})`,
      }}
    >
      <div className="col-5">
        <h1 className="p-lg-5 d-flex justify-content-center align-content-center align-items-center text-white">
          Your Details
        </h1>
        <div className="d-flex flex-column gap-5" style={{ paddingTop: "100px" }}>
          {/* <div className='d-flex'>
        <label className='text-black pe-2' htmlFor=""><span className='text-white'>Course: </span></label>
        <input type="text" className='w-100'  />
      </div> */}
          <div class="input-group mb-3">
            <div
              class="text-white d-flex justify-content-center align-content-center align-items-center "
              type="button"
              id="button-addon1"
            >
              <span className="pe-2">Course:</span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your course"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <div
              class="text-white d-flex justify-content-center align-content-center align-items-center "
              type="button"
              id="button-addon1"
            >
              <span className="pe-2">Sem:</span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your sem"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <div
              class="text-white d-flex justify-content-center align-content-center align-items-center "
              type="button"
              id="button-addon1"
            >
              <span className="pe-2">Class:</span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="enter your class"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
