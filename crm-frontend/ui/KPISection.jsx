import styled from "styled-components";

const KPIContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;

const KPIBox = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  text-align: center;
  flex: 1;
`;

function KPISection() {
  return (
    <KPIContainer>
      <KPIBox>
        <h3>Customer Satisfaction</h3>
        <p>85%</p>
      </KPIBox>
      <KPIBox>
        <h3>Retention Rate</h3>
        <p>90%</p>
      </KPIBox>
      <KPIBox>
        <h3>Churn Rate</h3>
        <p>10%</p>
      </KPIBox>
    </KPIContainer>
  );
}

export default KPISection;
