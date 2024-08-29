import React, { useEffect, useState } from "react";

import { Await, Link, useNavigate, useParams } from "react-router-dom";
import arrowIcon from "../assets/backArrow.png";
import DownArrow from "../assets/Arrowdown.png";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";

const EditTask = ({ baseURL }) => {
  const { id } = useParams();

  const { data } = useFetch(`${baseURL}/api/task/${id}`);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
      setTag(data.tag);
    }
  }, [data]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setSending(true);
    event.preventDefault();
    const editedData = {
      title,
      description,
      tag,
    };
    const oldData = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify(editedData),
      },
    };
    const response = await fetch(`${baseURL}/api/task/${id}`, oldData);

    const resData = await response.json();
    if (res.status === 200) {
      toast.success(resData.message);
      setSending(false);
      navigate("/tasks");
      return;
    } else {
      toast.error(resData.message);
    }
    toast.success(data.message);

    setSending(false);
  };

  return (
    <div className="editt-con text-start">
      <div className="back-to2 d-flex align-items-center gap-4">
        <Link to="/tasks">
          <img src={arrowIcon} alt="" />
        </Link>
        <h2 className="m-0">Edit Task</h2>
      </div>
      {/* =========================== */}
      <form onSubmit={handleSubmit} className="editt-form" action="">
        <div className="title-edit position-relative">
          <label className="position-absolute" htmlFor="title">
            Task Title
          </label>
          <input
            onChange={(event) => {
              setTitle(event.value.target);
            }}
            className="w-100 py-4 px-5 rounded-2"
            type="text"
            placeholder="E.g project  Defence, Assignment..."
            id="title"
            value={title}
          />
        </div>
        {/* ==== =====================================*/}
        <div className="describe-edit position-relative">
          <label className="position-absolute" htmlFor="description">
            Description
          </label>
          <textarea
            onChange={(event) => {
              setDescription(event.value.target);
            }}
            className="w-100 py-4 px-5 rounded-2"
            name=""
            id="description"
            cols="30"
            rows="7"
            placeholder="Briefly describe your task..."
            value={description}
          ></textarea>
        </div>
        {/* ========= ==*/}
        <DownArrow setTag={setTag} />
        {/* =========== */}
        <button disabled={sending} className="but-edit">
          Done
        </button>
      </form>
      {/* ======================== */}
      <div className="bk-top my-5 text-center">
        <a href="#">Back To Top</a>
      </div>
    </div>
  );
};

export default EditTask;
