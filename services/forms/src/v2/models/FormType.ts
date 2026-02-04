import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for forms.
 */
export type FormType = typeof FORMS | UnparsedObject;
export const FORMS = "forms";
