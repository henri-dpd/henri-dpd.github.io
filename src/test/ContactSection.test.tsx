import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import ContactSection from "@/components/ContactSection";

describe("ContactSection", () => {
  it("renders the section heading", () => {
    render(<ContactSection />);
    expect(screen.getByText("¿Hablamos?")).toBeInTheDocument();
  });

  it("renders all form fields and submit button", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Enviar Mensaje/i })
    ).toBeInTheDocument();
  });

  it("renders direct contact links", () => {
    render(<ContactSection />);
    const emailLink = screen.getByRole("link", {
      name: /henridanielpenadequero@gmail.com/i,
    });
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:henridanielpenadequero@gmail.com"
    );
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin.com\/in\/henri-pena/i,
    });
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/henri-pena"
    );
  });

  describe("form submission", () => {
    const user = userEvent.setup();

    beforeEach(() => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({ ok: true } as Response)
      );
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("shows success message after successful submission", async () => {
      render(<ContactSection />);

      await user.type(screen.getByLabelText(/Nombre/i), "Test User");
      await user.type(screen.getByLabelText(/Email/i), "test@example.com");
      await user.type(screen.getByLabelText(/Mensaje/i), "Hello from test");
      await user.click(screen.getByRole("button", { name: /Enviar Mensaje/i }));

      await waitFor(() => {
        expect(
          screen.getByText(/Mensaje enviado correctamente/i)
        ).toBeInTheDocument();
      });
    });

    it("shows error message on fetch failure", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({ ok: false } as Response)
      );
      render(<ContactSection />);

      await user.type(screen.getByLabelText(/Nombre/i), "Test User");
      await user.type(screen.getByLabelText(/Email/i), "test@example.com");
      await user.type(screen.getByLabelText(/Mensaje/i), "Hello from test");
      await user.click(screen.getByRole("button", { name: /Enviar Mensaje/i }));

      await waitFor(() => {
        expect(
          screen.getByText(/Hubo un error/i)
        ).toBeInTheDocument();
      });
    });
  });
});
