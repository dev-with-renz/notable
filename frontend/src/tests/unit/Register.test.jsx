import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom"
import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Register from "../../pages/Register"

const CurrentLocation = () => {
    const location = useLocation()
    return <span data-testid="current-location">{location.pathname}</span>
}

const renderRegister = () => render(
    <MemoryRouter initialEntries={["/register"]}>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<div>Login page</div>} />
        </Routes>
        <CurrentLocation />
    </MemoryRouter>
)

describe("Register modal", () => {
    // Renders all fields
    it("renders all form fields", () => {
        renderRegister()

        expect(screen.getByPlaceholderText("you@example.com")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("username")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Min. 6 characters")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Repeat your password")).toBeInTheDocument()
    })
    // Password mismatch shows error
    it("shows error when passwords do not match", async () => {
        renderRegister()
        const user = userEvent.setup()

        await user.type(screen.getByPlaceholderText("you@example.com"), "test@example.com")
        await user.type(screen.getByPlaceholderText("username"), "testuser")
        await user.type(screen.getByPlaceholderText("Min. 6 characters"), "password123")
        await user.type(screen.getByPlaceholderText("Repeat your password"), "diff_password")
        await user.click(screen.getByRole("checkbox"))
        await user.click(screen.getByRole("button", { name: "Create account"}))

        expect(screen.getByText("Passwords do not match")).toBeInTheDocument()
    })
    // Password length is short error
    it("shows error when passwords length is less than 6 characters", async () => {
        renderRegister()
        const user = userEvent.setup()

        await user.type(screen.getByPlaceholderText("you@example.com"), "test@example.com")
        await user.type(screen.getByPlaceholderText("username"), "testuser")
        await user.type(screen.getByPlaceholderText("Min. 6 characters"), "pass1")
        await user.type(screen.getByPlaceholderText("Repeat your password"), "pass1")
        await user.click(screen.getByRole("checkbox"))
        await user.click(screen.getByRole("button", { name: "Create account"}))

        expect(screen.getByText("Password must be at least 6 characters")).toBeInTheDocument()
    })
    // Close button returns the user to login
    it("navigates to login when close button is clicked", async () => {
        renderRegister()
        const user = userEvent.setup()

        await user.click(screen.getByText("X"))
        expect(screen.getByTestId("current-location")).toHaveTextContent("/login")
    })
    // Oauth buttons render
    it("renders Google and Github Oauth buttons", () => {
        renderRegister()

        expect(screen.getByRole("button", { name: "Continue with Google"})).toBeInTheDocument()
        expect(screen.getByRole("button", { name: "Continue with GitHub"})).toBeInTheDocument()
    })
})