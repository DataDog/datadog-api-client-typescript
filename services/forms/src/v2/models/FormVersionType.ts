import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for form versions.
 */
export type FormVersionType = typeof FORM_VERSIONS | UnparsedObject;
export const FORM_VERSIONS = "form_versions";
