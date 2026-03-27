/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The bucket key prefix indicating the type of file upload.
 */

export type SyntheticsTestFileMultipartPresignedUrlsRequestBucketKeyPrefix =
  | typeof API_UPLOAD_FILE
  | typeof BROWSER_UPLOAD_FILE_STEP
  | UnparsedObject;
export const API_UPLOAD_FILE = "api-upload-file";
export const BROWSER_UPLOAD_FILE_STEP = "browser-upload-file-step";
