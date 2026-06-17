import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for an intake API key.
 */
export type IntakeAPIKeyType = typeof INTAKE_API_KEY | UnparsedObject;
export const INTAKE_API_KEY = "intake_api_key";
