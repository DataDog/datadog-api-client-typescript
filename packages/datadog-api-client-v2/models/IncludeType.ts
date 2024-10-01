/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * supported include types.
 */

export type IncludeType =
  | typeof SCHEMA
  | typeof RAW_SCHEMA
  | typeof ONCALL
  | typeof INCIDENT
  | typeof RELATION
  | UnparsedObject;
export const SCHEMA = "schema";
export const RAW_SCHEMA = "raw_schema";
export const ONCALL = "oncall";
export const INCIDENT = "incident";
export const RELATION = "relation";
