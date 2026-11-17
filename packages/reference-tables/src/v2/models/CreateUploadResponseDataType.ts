import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Upload resource type.
 */
export type CreateUploadResponseDataType = typeof UPLOAD | UnparsedObject;
export const UPLOAD = "upload";
