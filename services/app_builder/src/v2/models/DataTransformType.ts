import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The data transform type.
 */
export type DataTransformType = typeof DATATRANSFORM | UnparsedObject;
export const DATATRANSFORM = "dataTransform";
