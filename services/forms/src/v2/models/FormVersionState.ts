import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The state of a form version.
 */
export type FormVersionState = typeof DRAFT | typeof FROZEN | UnparsedObject;
export const DRAFT = "draft";
export const FROZEN = "frozen";
