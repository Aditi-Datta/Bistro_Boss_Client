import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featureImg from '../../../assets/home/featured.jpg';
import './Featured.css';

function Featured() {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
                heading={'From our Menu'}
                subHeading={'check it out'}
            ></SectionTitle>

            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-20'>
                <div>
                    <img src={featureImg} alt=''></img>
                </div>
                <div className='md:ml-10'>
                    <p>August 20, 1023</p>
                    <p className='uppercase'>Where can I get some</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
}

export default Featured;