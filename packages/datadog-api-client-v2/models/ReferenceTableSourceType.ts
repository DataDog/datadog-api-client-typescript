/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The source type for reference table data. Includes all possible source types that can appear in responses.
 */

export type ReferenceTableSourceType =
  | typeof LOCAL_FILE
  | typeof S3
  | typeof GCS
  | typeof AZURE
  | typeof SERVICENOW
  | typeof SALESFORCE
  | typeof DATABRICKS
  | typeof SNOWFLAKE
  | UnparsedObject;
export const LOCAL_FILE = "LOCAL_FILE";
export const S3 = "S3";
export const GCS = "GCS";
export const AZURE = "AZURE";
export const SERVICENOW = "SERVICENOW";
export const SALESFORCE = "SALESFORCE";
export const DATABRICKS = "DATABRICKS";
export const SNOWFLAKE = "SNOWFLAKE";
