import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeroSection from "@/components/HeroSection";

describe("HeroSection", () => {
  it("renders the main heading with the full name", () => {
    render(<HeroSection />);
    expect(screen.getByText("Henri Peña")).toBeInTheDocument();
  });

  it("renders the badge label", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/Resilient Systems/i)
    ).toBeInTheDocument();
  });

  it("renders both CTA buttons", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("link", { name: /View Projects/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Contact/i })
    ).toBeInTheDocument();
  });

  it("CTA 'Ver Proyectos' links to the experience section", () => {
    render(<HeroSection />);
    const link = screen.getByRole("link", { name: /View Projects/i });
    expect(link).toHaveAttribute("href", "#experiencia");
  });

  it("renders the stats row labels", () => {
    render(<HeroSection />);
    // Stats row labels are unique; stat numbers may also appear in the terminal widget
    expect(screen.getByText("Years of exp.")).toBeInTheDocument();
    expect(screen.getByText("Intl. companies")).toBeInTheDocument();
    expect(screen.getByText("Technical pillars")).toBeInTheDocument();
  });
});
