import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the ownership feedback request resource. The value should always be `ownership_feedback`.
 */
export type OwnershipFeedbackType = typeof OWNERSHIP_FEEDBACK | UnparsedObject;
export const OWNERSHIP_FEEDBACK = "ownership_feedback";
