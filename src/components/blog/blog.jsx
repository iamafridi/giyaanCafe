import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog);
    const { title, cover, author, posted_date, hashtag, author_img, reading_time } = blog;
    return (
        <div>
            <img src={cover} alt={`Cover pic of ${title}`} />
            <div className='flex justify-between'>
                <div className='flex' >
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                <div className='ml-6'>
                    <h3 className="text-2xl">{author}</h3>
               <p>{posted_date}</p>
               
                </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>

            <h2 className='text-4xl'>{title}</h2>
            <p>
{
    hashtag.map((hash,idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
}


            </p>
        </div>
    );
};

Blog.proptypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;