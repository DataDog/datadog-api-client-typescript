/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The source type for creating reference table data. Only these source types can be created through this API.
 */

export type ReferenceTableCreateSourceType =
  | typeof LOCAL_FILE
  | typeof S3
  | typeof GCS
  | typeof AZURE
  | UnparsedObject;
export const LOCAL_FILE = "LOCAL_FILE";
export const S3 = "S3";
export const GCS = "GCS";
export const AZURE = "AZURE";
