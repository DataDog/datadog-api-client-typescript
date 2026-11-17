import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type for a form.
 */
export type FormType = typeof FORMS | UnparsedObject;
export const FORMS = "forms";
