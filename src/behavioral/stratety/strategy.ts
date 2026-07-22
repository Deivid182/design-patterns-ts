
import { IOAuth } from "./interfaces"
import { FacebookAuth, GoogleAuth } from "./oauth-providers";

export class OAuthContext {
  private strategy: IOAuth = {} as IOAuth;

  constructor() {}

  setStrategy(strategy: IOAuth) {
    this.strategy = strategy;
  }

  authenticate() {
    if (!this.strategy) {
      throw new Error("Authenticate strategy not set");
    }
    this.strategy.authenticate();
  }
}

const google = new GoogleAuth();
const facebook = new FacebookAuth();

const oauthContext = new OAuthContext();
oauthContext.setStrategy(google);
oauthContext.authenticate();

oauthContext.setStrategy(facebook);
oauthContext.authenticate();