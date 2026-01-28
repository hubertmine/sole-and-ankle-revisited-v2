import React from 'react';
import styled from 'styled-components';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <TabletHeaderWrapper>
            <TabletBreadcrumbs>
              <Breadcrumbs>
                <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
                <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
                <Breadcrumbs.Crumb href="/sale/shoes">
                  Shoes
                </Breadcrumbs.Crumb>
              </Breadcrumbs>
            </TabletBreadcrumbs>
            <Title>Running</Title>
          </TabletHeaderWrapper>
          <SelectWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SelectWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${({ theme }) => theme.breakpoints.tabletAndBelow} {
    display: none;
  }
`;

const TabletBreadcrumbs = styled.div`
  display: none;
  @media ${({ theme }) => theme.breakpoints.tabletAndBelow} {
    display: revert;
  }
`;


const TabletHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectWrapper = styled.div`
  display: block;

  @media ${({ theme }) => theme.breakpoints.phoneAndBelow} {
    display: none;
  }

`;


const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${({ theme }) => theme.breakpoints.tabletAndBelow} {
    align-items: flex-end;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
`;

export default ShoeIndex;
