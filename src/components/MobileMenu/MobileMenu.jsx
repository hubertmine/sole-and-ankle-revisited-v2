import React from 'react';
import styled from 'styled-components';

import * as Dialog from '@radix-ui/react-dialog';
import { COLORS, WEIGHTS } from '../../constants';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>
            <MobileMenuCloseButton onClick={onDismiss}>
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
              <Icon id="close" />
            </MobileMenuCloseButton>
            <MobileMenuNav>
              <a href="/sale">Sale</a>
              <a href="/new">New&nbsp;Releases</a>
              <a href="/men">Men</a>
              <a href="/women">Women</a>
              <a href="/kids">Kids</a>
              <a href="/collections">Collections</a>
            </MobileMenuNav>
            <MobileMenuFooter>
              <a href="/terms">Terms and Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/contact">Contact Us</a>
            </MobileMenuFooter>
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const DialogContent = styled(Dialog.Content)`
  background-color: ${COLORS.white};
  padding: 32px;
  padding-right: 22px;
  width: 80%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MobileMenuCloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  flex: 1;
  display:flex;
`;


const MobileMenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  & > a {
    text-decoration: none;
    color: inherit;
    font-size: 1.125rem;
    font-weight: ${WEIGHTS.medium};
    text-transform: uppercase;
    color: ${COLORS.gray[900]};
  }

  & > a:first-of-type {
    color: ${COLORS.secondary};
  }

`;

const MobileMenuFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  flex: 1;
  & > a {
    text-decoration: none;
    color: inherit;
    font-size: 0.875rem;
    font-weight: ${WEIGHTS.normal};
    color: ${COLORS.gray[700]};
  }
`;

const DialogOverlay = styled(Dialog.Overlay)`
      background-color: ${COLORS.gray.transparent};
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display:flex;
      flex-direction: row;
      justify-content: flex-end;
`;

export default MobileMenu;
