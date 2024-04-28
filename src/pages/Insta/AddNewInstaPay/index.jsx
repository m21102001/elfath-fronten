import { useState } from "react";
import { useNavigate } from "react-router";


const AddNewInstaPay = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  return (
    <div className="dashboard d-flex flex-row">
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold text-dark'>اضافة حساب بنكى جديد</h2>
        </div>
        <form
          // onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input1"
              className="form-label"
            >اسم صاحب الحساب البنكى</label>
            <input
              name="input1"
              type="text"
              className="form-control"
              id="input1"
              required
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              placeholder='اسم صاحب الحساب البنكى *'
            />
          </div>

          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input2"
              className="form-label"
            > رقم الحساب البنكى </label>
            <input
              name="input2"
              type="text"
              className="form-control"
              id="input2"
              required
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              placeholder=' رقم الحساب البنكى*'
            />
          </div>
          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input3"
              className="form-label"
            > رقم الهاتف</label>
            <input
              name="input3"
              type="text"
              className="form-control"
              id="input3"
              required
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              placeholder='ادخل رقم الهاتف *'
            />
          </div>

          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input4"
              className="form-label"
            > اضافة ليميت شهري </label>
            <input
              name="input4"
              type="number"
              className="form-control"
              id="input4"
              required
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              placeholder='اكتب الليميت الشهري للحساب البنكى *'
            />
          </div>

          {!loading && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              اضافة حساب  بنكى
            </button>
          )}
          {loading && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري الاضافة ...
            </button>
          )}
          <button onClick={() => navigate(`/dash/elfath/instaPay`)} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddNewInstaPay