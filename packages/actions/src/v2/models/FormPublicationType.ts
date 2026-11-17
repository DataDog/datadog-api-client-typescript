import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type for a form publication.
 */
export type FormPublicationType = typeof FORM_PUBLICATIONS | UnparsedObject;
export const FORM_PUBLICATIONS = "form_publications";
