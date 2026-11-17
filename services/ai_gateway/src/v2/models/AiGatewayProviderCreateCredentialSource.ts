import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whose credential the gateway sends to the provider. Defaults to `integration_account`, which sends
 * the integration account's credential. `subscription` forwards each caller's own subscription sign-in
 * (`ChatGPT` for `openai`, `claude.ai` for `anthropic`) and needs no integration account; it is available
 * only to organizations with subscription providers enabled. A subscription provider's models are
 * optional: callers can use any model their subscription includes, and a model you add sets its
 * pricing. Immutable.
 */
export type AiGatewayProviderCreateCredentialSource =
  | typeof INTEGRATION_ACCOUNT
  | typeof SUBSCRIPTION
  | UnparsedObject;
export const INTEGRATION_ACCOUNT = "integration_account";
export const SUBSCRIPTION = "subscription";
