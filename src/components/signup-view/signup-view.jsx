import React from "react";

export const SignupView = () => {
    
    const handleSubmit = (event) => {};

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </label>
            <label>
                Password:
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <label>
                Email:
                <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </label>
            <label>
                Birthday:
                <input
                type="text"
                value={email}
                onChange={(e) => setBirthday(e.target.value)}
                required
                />
            </label>
            <button type="submit">Sign Up</button>
        </form>
  );
};