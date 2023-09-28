import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog , handleAddBookmark, handleMarkAsRead}) => {
    console.log(blog);
    const { title, cover, author, posted_date, hashtag, author_img, reading_time } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover pic of ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex' >
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>

                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddBookmark(blog)}
                    className='ml-2 text-red-600 text-2xl'>
                        <FaBookmark></FaBookmark></button>
                </div>
            </div>

            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
                }


            </p>
            <button 
            onClick={()=> handleMarkAsRead(reading_time)}
            className='text-sky-800 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.proptypes = {
    // comma is important
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;