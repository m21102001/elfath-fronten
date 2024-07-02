import { GiCash } from "react-icons/gi";
import { IoMdCash } from "react-icons/io";
const Home = () => {
    return (
        <div className="container text-center pt-4">
            <div className="row align-items-center">
                <div className="col-sm-6 col-md-3">
                    <div className="shadow p-3 mb-5 bg-body rounded d-flex">
                        <IoMdCash color="red" size={30} />
                        <div className='px-1' >fawry Machine</div>
                        <div className='px-1' >35150 جنيه</div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="shadow p-3 mb-5 bg-body rounded d-flex">
                        <IoMdCash color="red" size={30} />
                        <div className='ps-3 pe-2' > voda cash</div>
                        <div className='px-2' >35150 جنيه</div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="shadow p-3 mb-5 bg-body rounded d-flex">
                        <GiCash color="red" size={30} />
                        <div className='px-1' >insta</div>
                        <div className='px-1' >35150 جنيه</div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="shadow p-3 mb-5 bg-body rounded d-flex">
                        <IoMdCash color="red" size={30} />
                        <div className='px-1' > yellow YellowCard</div>
                        <div className='px-1' >35150 جنيه</div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="shadow p-3 mb-5 bg-body rounded d-flex">
                        <IoMdCash color="red" size={30} />
                        <div className='px-1' >  مديونيه ليك</div>
                        <div className='px-1' >35150 جنيه</div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="shadow p-3 mb-5 bg-body rounded d-flex">
                        <IoMdCash color="red" size={30} />
                        <div className='px-1' >  مديونية عليكf</div>
                        <div className='px-1' >35150 جنيه</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home