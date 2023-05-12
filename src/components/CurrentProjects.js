import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

import { API } from "aws-amplify";
import {
  getUser as getUserQuery,
  getProject as getProjectQuery,
  listProjects as listProjectsQuery,
} from "../graphql/queries"
import {
  listUsers as listUsersQuery,
} from "../graphql/customQueries"
import {
  createProject as createProjectMutation,
  updateProject as updateProjectMutation,
  deleteProject as deleteProjectMutation,
} from "../graphql/mutations"

const columns = [
  { id: 'name', label: 'Project Name', minWidth: 170 },
  {
    id: 'createdAt',
    label: 'Start Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-GB', { timeZone: 'UTC' }),
  },
  {
    id: 'completion',
    label: 'Completion\u00a0(%)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

export default function CurrentProjects({user}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    fetchUsers(user);
  }, []);

  async function fetchUsers(username) {

    const apiData = await API.graphql({
      query: listUsersQuery,
      variables: {filter: {name: {eq: username}}},
    });
    const usersFromAPI = apiData.data.listUsers.items[0].projects.items;
    setProjects(usersFromAPI);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {projects
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((project) => {
                return (
                  <TableRow hover role="checkbox">
                    {columns.map((column) => {
                      const value = project[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && (typeof value === 'number' || typeof value === 'boolean')
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={projects.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}