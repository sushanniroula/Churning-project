import styled from "styled-components";
import { useState } from "react";
import Pagination from "../../ui/Pagination";

const CustomerContainer = styled.div`
  background: var(--color-grey-50);
  padding: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
`;

const Th = styled.th`
  background-color: var(--color-brand-700);
  color: white;
  padding: 12px;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid var(--color-grey-300);
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 12px;
  cursor: pointer;
  margin-right: 5px;
  background-color: ${({ color }) => color};
  color: white;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const FilterSelect = styled.select`
  padding: 0.8rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  margin-left: 1rem;
`;

const AddButton = styled.button`
  padding: 10px 15px;
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function Customer() {
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 5;
  const customers = [
    {
      id: "#001",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "(123) 456-7890",
      risk: "High",
    },
    {
      id: "#002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "(987) 654-3210",
      risk: "Medium",
    },
    {
      id: "#003",
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      phone: "(555) 123-4567",
      risk: "Low",
    },
  ];

  const totalPages = Math.ceil(customers.length / customersPerPage);
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  return (
    <CustomerContainer>
      <FiltersContainer>
        <h2>Customers</h2>
        <div>
          <AddButton>+ Add New Customer</AddButton>
          <FilterSelect>
            <option value="all">Churn Risk (All)</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </FilterSelect>
          <FilterSelect>
            <option value="all">Cohort (All)</option>
            <option value="cohort1">Cohort 1</option>
            <option value="cohort2">Cohort 2</option>
          </FilterSelect>
        </div>
      </FiltersContainer>
      <Table>
        <thead>
          <tr>
            <Th>Customer ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Churn Risk</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {currentCustomers.map((customer) => (
            <tr key={customer.id}>
              <Td>{customer.id}</Td>
              <Td>{customer.name}</Td>
              <Td>{customer.email}</Td>
              <Td>{customer.phone}</Td>
              <Td
                style={{
                  color:
                    customer.risk === "High"
                      ? "red"
                      : customer.risk === "Medium"
                      ? "orange"
                      : "green",
                }}
              >
                {customer.risk}
              </Td>
              <Td>
                <ActionButton color="#2ecc71">View</ActionButton>
                <ActionButton color="#3498db">Edit</ActionButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </CustomerContainer>
  );
}

export default Customer;
