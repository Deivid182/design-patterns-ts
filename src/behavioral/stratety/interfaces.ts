export interface IOAuth {
  authenticate(): Promise<boolean>;
}

export type OAuthProvider = 'google' | 'facebook' | 'linkedin';