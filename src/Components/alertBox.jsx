import { useDispatch } from "react-redux";
import { DeleteThread } from "../Redux/action";

const AlertBox = ({ setAlert, ThreadId }) => {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiNGFsMjFjczAwNkBnbWFpbC5jb20iLCJpZCI6MTQ0MywiZmlyc3ROYW1lIjoiNEFMMjFDUzAwNiJ9LCJpYXQiOjE3MjU5NDc0OTAsImV4cCI6MTc1NzQ4MzQ5MH0.7MZlXvw9mIq1ak0XOyH5djSN925JP07SeYsANyzXhh4";
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(DeleteThread(ThreadId, token));
    setAlert(false);
  };

  const handleCancel = () => {
    setAlert(false);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
        <div className="bg-gradient-to-b from-[#141517] to-[#232528] p-8 flex flex-col items-center justify-center  rounded-lg w-1/3">
          <h2 className="text-lg text-white font-bold mb-4">Are you sure ?</h2>
          <br />
          <p className="text-[#E8E8E8] mb-4">
            Your selected email will be deleted.
          </p>
          <br />
          <div className="flex justify-center">
            <button
              className="bg-black text-white px-4 py-2 rounded mr-4"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="bg-gradient-to-b from-[#FA5252] to-[#A91919] text-white px-4 py-2 rounded "
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AlertBox;
