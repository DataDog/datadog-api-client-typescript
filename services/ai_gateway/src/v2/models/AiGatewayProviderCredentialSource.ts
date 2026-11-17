import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whose credential the gateway sends to the provider. `integration_account` sends the integration
 * account's credential. `subscription` forwards each caller's own subscription sign-in (`ChatGPT` for
 * `openai`, `claude.ai` for `anthropic`) and needs no integration account.
 */
export type AiGatewayProviderCredentialSource =
  | typeof INTEGRATION_ACCOUNT
  | typeof SUBSCRIPTION
  | UnparsedObject;
export const INTEGRATION_ACCOUNT = "integration_account";
export const SUBSCRIPTION = "subscription";
