import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for form submissions.
 */
export type FormSubmissionType = typeof FORM_SUBMISSIONS | UnparsedObject;
export const FORM_SUBMISSIONS = "form_submissions";
