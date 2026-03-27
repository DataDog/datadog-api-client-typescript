import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the response.
 */
export type SourceMapUploadResponseType =
  | typeof SOURCEMAP_UPLOAD
  | UnparsedObject;
export const SOURCEMAP_UPLOAD = "sourcemap_upload";
