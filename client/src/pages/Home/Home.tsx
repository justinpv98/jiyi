import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import * as styled from "./Home.styles";

import Navbar from "@/features/ui/Navbar/Navbar";
import Button from "@/features/ui/Button/Button";
import Card from "@/features/ui/Card/Card";
import Footer from "@/features/ui/Footer/Footer";

// Images
import Person from "@/assets/images/landing/herowoman.webp";
import Language from "@/assets/images/landing/language.webp";
import Bus from "@/assets/images/landing/bus.png";
import Book from "@/assets/images/landing/book.png";
import Clock from "@/assets/images/landing/clock.png";
import Laptop from "@/assets/images/landing/laptop.webp";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <styled.Hero>
        <styled.HeroContainer>
          <styled.HeroSection>
            <styled.HeroHeading>
              Remember anything — for free!
            </styled.HeroHeading>
            <styled.HeroCopy>
              Learn and retain the information easily with the #1 new flashcard
              app, so you can achieve your goals faster and with less
              frustration.
            </styled.HeroCopy>
            {/* @ts-ignore */}
            <Button color="primaryGradient" as={Link} to="/register">
              Start Learning
            </Button>
          </styled.HeroSection>
          <styled.HeroSection>
            <styled.ImageContainer>
              <img src={Person} alt="woman holding a book and smiling" />
            </styled.ImageContainer>
            <styled.CircleFloater>
              <img src={Language} alt="" />
              <p>Learn a language</p>
            </styled.CircleFloater>
            <styled.Floater>
              <span>😊</span>
              <p>Simple, free, and easy!</p>
            </styled.Floater>
            <styled.BackgroundCircle />
          </styled.HeroSection>
        </styled.HeroContainer>
      </styled.Hero>
      <styled.CardSection>
        <styled.SectionContainer>
          <styled.SectionTitle>Why You'll Like Jiyi</styled.SectionTitle>
          <styled.CardContainer>
            <Card direction="vertical">
              <styled.CardHeader>
                <img src={Book} alt="" role="presentation" />
                <h3>Effortless Studying</h3>
              </styled.CardHeader>
              <styled.CardBody>
                We help you learn and retain information with little effort
                using the powerful concept of spaced repetition
              </styled.CardBody>
            </Card>
            <Card direction="vertical">
              <styled.CardHeader>
                <img src={Clock} alt="" role="presentation" />
                <h3>Effortless Studying</h3>
              </styled.CardHeader>
              <styled.CardBody>
                We help you learn and retain information with minimal effort
                using the powerful concept of spaced repetition
              </styled.CardBody>
            </Card>
            <Card direction="vertical">
              <styled.CardHeader>
                <img src={Bus} alt="" role="presentation" />
                <h3>Effortless Studying</h3>
              </styled.CardHeader>
              <styled.CardBody>
                We help you learn and retain information with minimal effort
                using the powerful concept of spaced repetition
              </styled.CardBody>
            </Card>
          </styled.CardContainer>
        </styled.SectionContainer>
      </styled.CardSection>
      <styled.Section>
        <styled.SectionContainer>
          <styled.SectionTitle>What Jiyi Does</styled.SectionTitle>
          <styled.FeaturesContainer>
            <styled.FeatureSection>
              <div>
                <styled.FeaturesHeading>Premade Decks</styled.FeaturesHeading>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ad, sed et quidem dolorum ratione.
                </p>
              </div>
              <div>
                <styled.FeaturesHeading>Shareable</styled.FeaturesHeading>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ad, sed et quidem dolorum ratione.
                </p>
              </div>
            </styled.FeatureSection>
            <styled.FeaturesImageContainer>
              <styled.FeaturesImage src={Laptop} alt="" role="presentation" />
            </styled.FeaturesImageContainer>
            <styled.FeatureSection>
              <div>
                <styled.FeaturesHeading>
                  Personalized For You
                </styled.FeaturesHeading>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ad, sed et quidem dolorum ratione.
                </p>
              </div>
              <div>
                <styled.FeaturesHeading>Customizable</styled.FeaturesHeading>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ad, sed et quidem dolorum ratione.
                </p>
              </div>
            </styled.FeatureSection>
          </styled.FeaturesContainer>
        </styled.SectionContainer>
      </styled.Section>
      <styled.BottomCTASection>
        <styled.FooterHeading>
          Remember anything with Jiyi!
        </styled.FooterHeading>
        {/* @ts-ignore */}
        <Button as={Link} to="/register" color="primaryGradient">
          Start Learning
        </Button>
      </styled.BottomCTASection>
      <Footer />
    </Fragment>
  );
}
