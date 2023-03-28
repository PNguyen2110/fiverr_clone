import React from "react";

import { Input, Table } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  deleteRentList,
  getServices,
} from "../../../storeToolKit/ThueCongViec/thueCongViecReducer";
import { useThueCongViec } from "../../../storeToolKit/ThueCongViec/thueCongViecSelector";
import { isArray } from "lodash";

//
export const ServiceManagement = () => {
  const { Search } = Input;
  const dispatch = useDispatch();

  let { services } = useThueCongViec();

  // check data type
  let arrServices = [];
  if (isArray(services)) {
    arrServices = services;
  } else {
    arrServices.push(services);
  }

  useEffect(() => {
    dispatch(getServices());
  }, []);
  //

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "10%",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
    },
    {
      title: "Job code",
      dataIndex: "maCongViec",
      width: "10%",
      sorter: (a, b) => a.maCongViec - b.maCongViec,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
    },
    {
      title: "Commenter Code",
      dataIndex: "maNguoiThue",
      width: "15%",
    },
    {
      title: "Date of Hire",
      dataIndex: "ngayThue",
      width: "20%",
    },
    {
      title: "Status",
      dataIndex: "hoanThanh",
      width: "20%",
      render: (text, data) => {
        if (data.hoanThanh.toString() === "true") {
          return (
            <div className="flex justify-between text-green-500">
              <p>Complete</p>
              <span className="">
                <i className="fa-solid fa-check"></i>
              </span>
            </div>
          );
        } else {
          return (
            <div className="flex justify-between text-red-500">
              <p>UnComplete</p>
              <span className="">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          );
        }
      },
    },

    {
      title: "Actions",
      dataIndex: "thaotac",
      render: (text, data) => {
        return (
          <React.Fragment key={Date.now()}>
            <button
              title="Delete"
              className="ml-3 text-2xl text-red-400"
              onClick={() => dispatch(deleteRentList(data.id))}
            >
              <span>
                <i className="fa-solid fa-trash-can"></i>
              </span>
            </button>
          </React.Fragment>
        );
      },
      width: "10%",
    },
  ];

  const data = arrServices;

  const onSearch = (value) => {
    if (!value.match(new RegExp(/[^1-9]/))) {
      dispatch(getServices(value));
    } else {
      alert("please enter your id");
    }
  };
  return (
    <>
      <Search
        placeholder="input search id"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
        allowClear
      />
      <Table
        rowKey={(data) => data.id}
        columns={columns}
        dataSource={data}
        bordered
      />
    </>
  );
};
