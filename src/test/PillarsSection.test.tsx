import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PillarsSection from "@/components/PillarsSection";

describe("PillarsSection", () => {
  it("renders the section heading", () => {
    render(<PillarsSection />);
    expect(screen.getByText("My Pillars")).toBeInTheDocument();
  });

  it("renders all three pillar cards", () => {
    render(<PillarsSection />);
    expect(screen.getByText("Cloud Development")).toBeInTheDocument();
    expect(screen.getByText("Cybersecurity")).toBeInTheDocument();
    expect(screen.getByText("Process Modernization")).toBeInTheDocument();
  });

  it("renders technology tags on each card", () => {
    render(<PillarsSection />);
    expect(screen.getByText("AWS Lambda")).toBeInTheDocument();
    expect(screen.getByText("OWASP")).toBeInTheDocument();
    expect(screen.getByText("CI/CD")).toBeInTheDocument();
  });
});
