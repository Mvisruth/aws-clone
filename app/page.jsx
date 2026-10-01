import Header from "@/components/Header";
import SignInCard from "@/components/SignInCard";
import LightsailCard from "@/components/LightsailCard";
import BackgroundCubes from "@/components/BackgroundCubes";

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* Subtle 3D isometric cubes in the background */}
      <BackgroundCubes />

      {/* Top Header with navigation & centered AWS logo */}
      <Header />

      {/* Main Two-Column Content Grid */}
      <main className="main-content">
        <div className="content-container">
          <div className="signin-grid">
            <div className="grid-left-col">
              <SignInCard />
            </div>
            <div className="grid-right-col">
              <LightsailCard />
            </div>
          </div>

          {/* Legal disclaimer placed directly below the left card */}
          <div className="disclaimer-wrapper">
            <p className="disclaimer-text">
              By continuing, you agree to{" "}
              <a href="#agreement" className="disclaimer-link">
                AWS Customer Agreement
              </a>{" "}
              or other agreement for AWS services, and the{" "}
              <a href="#privacy" className="disclaimer-link">
                Privacy Notice
              </a>
              . This site uses essential cookies. See our{" "}
              <a href="#cookies" className="disclaimer-link">
                Cookie Notice
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="page-footer">
        <p className="copyright-text">
          © 2026 Amazon Web Services, Inc. or its affiliates. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
