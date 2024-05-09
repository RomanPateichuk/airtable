import React, {useState} from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead, TablePagination,
  TableRow
} from "@mui/material";
import {useGetAllDataQuery} from "../../redux"
import {Loader} from "../Loader/Loader.tsx"
import {useNavigate} from "react-router-dom"

export const CustomTable: React.FC = () => {
  const {data = [], isLoading} = useGetAllDataQuery()

  const navigate = useNavigate()

  const columns = [
    {id: 1, value: "Name"},
    {id: 2, value: "Capital"},
    {id: 3, value: "Currencies"},
    {id: 4, value: "Region"},
    {id: 5, value: "Languages"}
  ] as const

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  const onClickRowHandler = (name: string) => {
    navigate(`/country/${name}`)
  }

  return <>
    {
      isLoading ? <Loader/> :
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{
                backgroundColor: "#c6b7b7",
                color: "#333",
                fontWeight: "bold",
              }}>
                {columns.map(item => <TableCell key={item.id}>{item.value}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item =>
                  <TableRow key={item.name.common}
                  onClick={()=>{
                    onClickRowHandler(item.name.common)
                  }}
                  >
                  <TableCell>
                    {item.name.common}
                  </TableCell>
                  <TableCell>
                    {item.capital}
                  </TableCell>
                  <TableCell>
                    {
                      Object.keys(item.currencies)[0]
                    }
                  </TableCell>
                  <TableCell>
                    {item.region}
                  </TableCell>
                  <TableCell>
                    {
                      Object.keys(item.languages).map(key => (
                        <div key={key}>{item.languages[key]}</div>
                      ))

                    }
                  </TableCell>
                </TableRow>)
              }
            </TableBody>
          </Table>
          <TablePagination
            sx={{
              backgroundColor: "#c6b7b7",
              color: "#333",
              fontWeight: "bold",
            }}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>

    }
  </>
}

