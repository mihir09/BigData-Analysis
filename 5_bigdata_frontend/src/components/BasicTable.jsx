import React, { useMemo } from "react";
import { useTable } from "react-table";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import TABLE_DATA from "../data/TABLE_DATA.json";
import { COLUMNS } from "./columns";
import "./table.css";
export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => TABLE_DATA, []);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table
      {...getTableProps()}
      style={{
        backgroundColor: colors.primary[500],
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      textOverflow: "ellipsis",
                    }}
                  >
                    {cell.column.id === "url" ? (
                      <a href={cell.value}>{cell.render("Cell")}</a>
                    ) : (
                      cell.render("Cell")
                    )}
                    {/* {cell.render("Cell")} */}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
