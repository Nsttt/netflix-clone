import React from 'react';
import { Feature, OptForm } from '../components';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
import { HeaderContainer } from '../containers/header';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited Films, TV Programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch Anywhere. Cancel at any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Disclaimer. This is not an oficial Netflix app. It's just a clone.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
