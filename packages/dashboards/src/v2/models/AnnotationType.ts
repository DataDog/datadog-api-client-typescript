import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Annotation resource type.
 */
export type AnnotationType = typeof ANNOTATION | UnparsedObject;
export const ANNOTATION = "annotation";
