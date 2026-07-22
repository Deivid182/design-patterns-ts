/**
 * What we have to test about the Strategy pattern is that we can change the strategy at runtime and that the context uses the correct strategy to perform the operation.
 */
import { describe, it, afterEach, vi, expect } from "vitest";
import { OAuthContext } from "./strategy";

const googleAuthMock = {
  authenticate: vi.fn(() => Promise.resolve(true)),
};

const facebookAuthMock = {
  authenticate: vi.fn(() => Promise.resolve(true)),
};

describe("Strategy pattern", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should use GoogleAuth strategy", async () => {
    const oauthContext = new OAuthContext();
    oauthContext.setStrategy(googleAuthMock);
    await oauthContext.authenticate();
    expect(googleAuthMock.authenticate).toHaveBeenCalledTimes(1);
    expect(facebookAuthMock.authenticate).not.toHaveBeenCalled();
  });

  it("should use FacebookAuth strategy", async () => {
    const oauthContext = new OAuthContext();
    oauthContext.setStrategy(facebookAuthMock);
    await oauthContext.authenticate();
    expect(facebookAuthMock.authenticate).toHaveBeenCalledTimes(1);
    expect(googleAuthMock.authenticate).not.toHaveBeenCalled();
  });
})