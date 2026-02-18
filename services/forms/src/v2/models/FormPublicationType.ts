import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for form publications.
 */
export type FormPublicationType = typeof FORM_PUBLICATIONS | UnparsedObject;
export const FORM_PUBLICATIONS = "form_publications";
