import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ExperienceSection from "@/components/ExperienceSection";

describe("ExperienceSection", () => {
  it("renders the section heading", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Matriz de Experiencia")).toBeInTheDocument();
  });

  it("renders all six roles", () => {
    render(<ExperienceSection />);
    const companies = [
      "The Power Plugin",
      "White Tower Soft",
      "Avangenio",
      "IBERANT Solutions",
      "Centro de Neurociencias (CNeuro)",
      "Guajiritos",
    ];
    for (const company of companies) {
      expect(screen.getByText(company)).toBeInTheDocument();
    }
  });

  it("marks the current role with an 'Activo' badge", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Activo")).toBeInTheDocument();
  });

  it("renders location and period metadata", () => {
    render(<ExperienceSection />);
    // Multiple roles share this location — assert at least one exists
    expect(screen.getAllByText("Remoto · España").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Feb 2026 – Actualidad")).toBeInTheDocument();
  });
});
