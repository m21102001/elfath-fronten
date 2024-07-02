import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Ab = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const fawryMachine = [
    {
      id: 1,
      name: 'fawry machine 1',
      price: 1000,

    },
    {
      id: 2,
      name: 'fawry machine 2',
      price: 2000,
    },
    {
      id: 3,
      name: 'fawry machine 3',
      price: 3000,
    }
  ]

  const cash = {
    _id: 3,
    name: "احمد العربي  ",
    value: '100000',
    notes: [
      {
        _id: 2,
        name: "احمد الخولى  ",
        value: '100000',
        notes: 'له 5000 فودافون كاش وشيل العموله منهم ',
      },
      {
        _id: 3,
        name: "احمد العربي  ",
        value: '100000',
        notes: 'بدون ملاحظات',
      },
    ]
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(
        (res) => setData(res.data)
      ).catch(err =>
        console.log(err)
      )
  }, [])
  console.log(data);

  return (
    // <div className="dashboard d-flex flex-row">
    //   {
    //     // user.role != 'manager' &&
    //     <div className="loading"></div>
    //   }

    //   <div className="container text-center">
    //     <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
    //       <h2 className='fs-1 fw-bold text-dark'> ماكينات فوري </h2>
    //     </div>
    //     <div className="d-flex flex-row justify-content-between">
    //       <Link to="/dash/elfath/fawry-machine/add-fawry-machine">
    //         <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافة جديد</button>
    //       </Link>
    //     </div>
    //     <table className="table table-striped table-hover">
    //       <thead>
    //         <tr>
    //           <th scope="col">رقم الماكينة</th>
    //           <th scope="col">اسم الماكينة</th>
    //           <th scope="col">السعر</th>
    //           <th scope="col" colSpan={2}>الاحداث</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {!loading && fawryMachine.map((item, index) => (
    //           <tr key={index} className="table-active">
    //             <td>{item.id}</td>
    //             <td>{item.name}</td>
    //             <td>{item.price}</td>
    //             <td>
    //               <Link className='px-1' to='/dash/dashboard/add-ab' >
    //                 <button className='btn btn-outline-info'> اضافه</button>
    //               </Link>
    //               <Link className='px-1' to='/dash/dashboard/updated-ab' >
    //                 <button className='btn btn-outline-success'> تعديل</button>
    //               </Link>
    //               <Link className='px-1' to='/dash/dashboard/delete-ab' >
    //                 <button className='btn btn-outline-danger'>حذف</button>
    //               </Link>
    //             </td>
    //           </tr>
    //         ))}

    //         {/* {!loading && fawryMachine?.map((item, index) => (
    //           <tr key={index}>
    //             <td>{index + 1}</td>
    //             <td>{item?.name}</td>
    //             <td>{item?.cashOut} جنية مصري </td>
    //             <td>{item?.price} جنية مصري </td>
    //             <td>
    //               <Link
    //                 to={`/dash/elfath/fawry-machine/update-fawry-machine/${item._id}`}
    //                 state={{ item: item }}
    //               >
    //                 <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
    //               </Link>
    //               <Link
    //                 to={`/dash/elfath/fawry-machine/details-fawry-machine/${item._id}`}
    //                 state={{ item: item }}
    //               >
    //                 <button className="btn btn-outline-info mx-2 px-4">التفاصيل</button>
    //               </Link>
    //               <button
    //                 // onClick={() => handelDelete(item._id)}
    //                 className="btn btn-outline-danger mx-2 px-4"
    //               >حذف</button>

    //             </td>
    //           </tr>
    //         ))} */}

    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <>
      {data.map((item, index) => (
        // index == 15 ? (
          <>
            <p>{item.id}</p>
          </>
        // ) : null
      ))}
      <h1>
        {
          fawryMachine.map((item, index) => (
            <>
              <p> {item.id}</p>
              <p> {item.value}</p>
            </>
          ))
        }
      </h1>
      <h1>
        {
          cash.notes.map((item, index) => (
            index == 0 ? (
              <p>{item?.notes}item</p>
            ) : null
          ))
        } object
      </h1>
    </>
  )
}

export default Ab