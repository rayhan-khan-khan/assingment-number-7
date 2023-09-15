import PropTypes from 'prop-types';

const Flower = ({flower}) => {
    const {title, img, p, price} = flower
    return (
        <div>
         
    <div className="card wx-[400px]  bg-base-100 shadow-xl rounded-xl">
  <figure className="px-6 py-7">
    <img src={img} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body ml-4">
    <h2 className="card-title text-xl font-medium">{title}</h2>
    <p className='mt-2 mb-2 hi'>{p}</p>
    <div className='flex gap-2 mb-2'>
         <p className='font-bold hi'>price: {price}</p> 
    </div>
  <div className='pr-4 pb-4'>
        <button className='bg-[#2F80ED] w-full py-2  rounded text-white font-semibold'>Select</button>
  </div>
  </div>
 
</div>

        </div>

    );
};
Flower.propTypes ={
    flower: PropTypes.object.isRequired
}
export default Flower;
