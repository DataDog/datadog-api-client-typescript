import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The bucket key prefix indicating the type of file upload.
 */
export type SyntheticsTestFileMultipartPresignedUrlsRequestBucketKeyPrefix =
  | typeof API_UPLOAD_FILE
  | typeof BROWSER_UPLOAD_FILE_STEP
  | UnparsedObject;
export const API_UPLOAD_FILE = "api-upload-file";
export const BROWSER_UPLOAD_FILE_STEP = "browser-upload-file-step";
