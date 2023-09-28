import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3   ml-4 mt-2 pt-2 bg-gray-300 rounded-xl">
            <div className='mb-2 bg-gray-400 rounded-xl p-4 font-serif'>
                <h3 className='text-2xl'> Spend time on reading : {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center font-semibold">Bookmarked blogs :{bookmarks.length}</h2>
       {

        bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
       }
       
       
       
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;