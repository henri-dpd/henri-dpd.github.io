import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

describe("Navbar", () => {
  it("renders the logo signature", () => {
    render(<Navbar />);
    expect(screen.getByText("Henri")).toBeInTheDocument();
    expect(screen.getByText("dev")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    const labels = [
      "Inicio",
      "Sobre Mí",
      "Pilares",
      "Experiencia",
      "Write-ups",
      "Contacto",
    ];
    for (const label of labels) {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1);
    }
  });
});

describe("Footer", () => {
  it("renders the copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/Henri Daniel Peña/i)).toBeInTheDocument();
  });

  it("renders GitHub and LinkedIn social links", () => {
    render(<Footer />);
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
  });
});
