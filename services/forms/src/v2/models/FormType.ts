import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for a form.
 */
export type FormType = typeof FORMS | UnparsedObject;
export const FORMS = "forms";
