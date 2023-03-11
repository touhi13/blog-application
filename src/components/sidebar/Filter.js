import { useDispatch } from "react-redux";
import { filtered } from "../../features/sortFilter/sortFilterSlice";

export default function Filter() {
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        dispatch(filtered(e.target.value));
    }
    return (
        <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
                <div>
                    <input type="radio" name="filter" id="lws-all" value="all" defaultChecked className="radio" onChange={onChangeHandler} />
                    <label htmlFor="lws-all">All</label>
                </div>
                <div>
                    <input type="radio" name="filter" id="lws-saved" value="saved" className="radio" onChange={onChangeHandler} />
                    <label htmlFor="lws-saved">Saved</label>
                </div>
            </div>
        </div>
    )
}
