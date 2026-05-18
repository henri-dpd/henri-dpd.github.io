import { render, screen, fireEvent } from "@testing-library/react";
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

  it("renders location and period metadata in role headers", () => {
    render(<ExperienceSection />);
    // Multiple roles share "Remoto · España" — assert at least one exists
    expect(screen.getAllByText("Remoto · España").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Feb 2026 – Actualidad")).toBeInTheDocument();
  });

  it("opens the current role accordion by default", () => {
    render(<ExperienceSection />);
    // The current role button (The Power Plugin) should start expanded
    const expandedButton = screen
      .getAllByRole("button")
      .find((btn) => btn.getAttribute("aria-expanded") === "true");
    expect(expandedButton).toBeDefined();
  });

  it("toggles a collapsed role open when its button is clicked", () => {
    render(<ExperienceSection />);
    // White Tower Soft is not the current role — starts collapsed
    const wtButton = screen.getByRole("button", { name: /White Tower Soft/i });
    expect(wtButton).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(wtButton);
    expect(wtButton).toHaveAttribute("aria-expanded", "true");
  });

  it("closes an open role when its button is clicked again", () => {
    render(<ExperienceSection />);
    // The current role starts open
    const currentButton = screen.getByRole("button", {
      name: /The Power Plugin/i,
    });
    expect(currentButton).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(currentButton);
    expect(currentButton).toHaveAttribute("aria-expanded", "false");
  });
});

