import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BlogSection from "@/components/BlogSection";

describe("BlogSection", () => {
  it("renders the section heading", () => {
    render(<BlogSection />);
    expect(screen.getByText("Producción Técnica")).toBeInTheDocument();
  });

  it("renders both writeup card titles", () => {
    render(<BlogSection />);
    expect(screen.getByText("Write-ups de Seguridad")).toBeInTheDocument();
    expect(screen.getByText("Guías de Modernización")).toBeInTheDocument();
  });

  it("renders 'Ver en GitHub' links pointing to the GitHub profile", () => {
    render(<BlogSection />);
    const links = screen.getAllByRole("link", { name: /Ver en GitHub/i });
    expect(links).toHaveLength(2);
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "https://github.com/henri-dpd");
    });
  });
});
