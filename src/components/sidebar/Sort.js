import { useDispatch, useSelector } from 'react-redux';
import { sorted } from '../../features/sortFilter/sortFilterSlice';

export default function Sort() {
    const dispatch = useDispatch();

    return (
        <div className="sidebar-content">
            <h4>Sort</h4>
            <select name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
                onChange={(e) => dispatch(sorted(e.target.value))}
            >
                <option value="">Default</option>
                <option value="newest">Newest</option>
                <option value="most_liked">Most Liked</option>
            </select>
        </div>
    )
}
