/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Identifies the specific reason a Cost and Usage Report (CUR) 2.0 configuration failed validation.
*/

export type AWSCcmConfigValidationIssueCode = typeof ISSUE_CODE_UNSPECIFIED| typeof CREDENTIAL_ERROR| typeof BUCKET_NAME_INVALID_GOVCLOUD| typeof S3_LIST_PERMISSION_MISSING| typeof S3_GET_PERMISSION_MISSING| typeof S3_BUCKET_REGION_MISMATCH| typeof S3_BUCKET_NOT_ACCESSIBLE| typeof EXPORT_LIST_PERMISSION_MISSING| typeof EXPORT_GET_PERMISSION_MISSING| typeof EXPORT_NOT_FOUND| typeof EXPORT_STATUS_UNHEALTHY| typeof TIME_GRANULARITY_INVALID| typeof FILE_FORMAT_INVALID| typeof INCLUDE_RESOURCES_DISABLED| typeof REFRESH_CADENCE_INVALID| typeof OVERWRITE_MODE_INVALID| typeof QUERY_STATEMENT_INVALID | UnparsedObject;
export const ISSUE_CODE_UNSPECIFIED = 'ISSUE_CODE_UNSPECIFIED';
export const CREDENTIAL_ERROR = 'CREDENTIAL_ERROR';
export const BUCKET_NAME_INVALID_GOVCLOUD = 'BUCKET_NAME_INVALID_GOVCLOUD';
export const S3_LIST_PERMISSION_MISSING = 'S3_LIST_PERMISSION_MISSING';
export const S3_GET_PERMISSION_MISSING = 'S3_GET_PERMISSION_MISSING';
export const S3_BUCKET_REGION_MISMATCH = 'S3_BUCKET_REGION_MISMATCH';
export const S3_BUCKET_NOT_ACCESSIBLE = 'S3_BUCKET_NOT_ACCESSIBLE';
export const EXPORT_LIST_PERMISSION_MISSING = 'EXPORT_LIST_PERMISSION_MISSING';
export const EXPORT_GET_PERMISSION_MISSING = 'EXPORT_GET_PERMISSION_MISSING';
export const EXPORT_NOT_FOUND = 'EXPORT_NOT_FOUND';
export const EXPORT_STATUS_UNHEALTHY = 'EXPORT_STATUS_UNHEALTHY';
export const TIME_GRANULARITY_INVALID = 'TIME_GRANULARITY_INVALID';
export const FILE_FORMAT_INVALID = 'FILE_FORMAT_INVALID';
export const INCLUDE_RESOURCES_DISABLED = 'INCLUDE_RESOURCES_DISABLED';
export const REFRESH_CADENCE_INVALID = 'REFRESH_CADENCE_INVALID';
export const OVERWRITE_MODE_INVALID = 'OVERWRITE_MODE_INVALID';
export const QUERY_STATEMENT_INVALID = 'QUERY_STATEMENT_INVALID';