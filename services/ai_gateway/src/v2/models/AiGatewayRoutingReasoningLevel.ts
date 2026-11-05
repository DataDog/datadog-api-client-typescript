import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Optional reasoning effort preference for this model destination. Must be supported by the selected model and provider. For provider "*", every eligible provider must support the level. An explicit value overrides the request's reasoning setting, subject to model-group policy. Omitted or null preserves request and provider behavior; none is an explicit level, not the default. Omitted or null clears an override on full replacement. Routing-rule references cannot set this field; each referenced model destination owns its override. If an override cannot be applied at runtime, the gateway keeps the destination and restores the caller's original reasoning settings, or preserves the provider default when omitted. It rechecks all applicable route and model-group policies against those settings before sending. Model-group max_reasoning_level enforces hard limits; the override is not an additional cap. Normal fallback applies if governance denies the resulting request or the destination cannot otherwise serve it. Metrics and span tags record the override outcome and incompatibility reason. When response headers have not already been committed, `X-Ai-Gateway-Reasoning-Override` reports applied or not_applied for the returned attempt, and `X-Ai-Gateway-Reasoning-Override-Reason` reports the reason when not applied.
 */
export type AiGatewayRoutingReasoningLevel =
  | typeof NONE
  | typeof MINIMAL
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | typeof XHIGH
  | typeof MAX
  | UnparsedObject;
export const NONE = "none";
export const MINIMAL = "minimal";
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
export const XHIGH = "xhigh";
export const MAX = "max";
