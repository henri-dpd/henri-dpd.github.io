import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import ContactSection from "@/components/ContactSection";

describe("ContactSection", () => {
  it("renders the section heading", () => {
    render(<ContactSection />);
    expect(screen.getByText("Let\u2019s Talk?")).toBeInTheDocument();
  });

  it("renders all form fields and submit button", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Send Message/i })
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

      await user.type(screen.getByLabelText(/Name/i), "Test User");
      await user.type(screen.getByLabelText(/Email/i), "test@example.com");
      await user.type(screen.getByLabelText(/Message/i), "Hello from test");
      await user.click(screen.getByRole("button", { name: /Send Message/i }));

      await waitFor(() => {
        expect(
          screen.getByText(/Message sent successfully/i)
        ).toBeInTheDocument();
      });
    });

    it("shows error message on fetch failure", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({ ok: false } as Response)
      );
      render(<ContactSection />);

      await user.type(screen.getByLabelText(/Name/i), "Test User");
      await user.type(screen.getByLabelText(/Email/i), "test@example.com");
      await user.type(screen.getByLabelText(/Message/i), "Hello from test");
      await user.click(screen.getByRole("button", { name: /Send Message/i }));

      await waitFor(() => {
        expect(
          screen.getByText(/There was an error/i)
        ).toBeInTheDocument();
      });
    });
  });
});
