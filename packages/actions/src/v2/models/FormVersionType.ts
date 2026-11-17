import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type for a form version.
 */
export type FormVersionType = typeof FORM_VERSIONS | UnparsedObject;
export const FORM_VERSIONS = "form_versions";
