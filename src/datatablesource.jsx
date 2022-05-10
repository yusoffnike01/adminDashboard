export const userColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user', headerName: "User", width: 270, renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} />
          {params.row.username}
        </div>
      );
    }
  },
  { field: "email", headerName: "Email", width: 270 },
  { field: 'age', headerName: "Age", width: 230 },
  {
    field: 'status', headerName: "Status", width: 200, renderCell: (params) => {
      return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
    }
  },
]

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "",
    status: "active",
    email: "npw@gmail.com",
    age: 35
  }
]