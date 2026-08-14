/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Collection health of a single dataflow.
 */

export type IntegrationAccountDataflowHealth =
  | typeof OK
  | typeof BROKEN
  | typeof UNKNOWN
  | UnparsedObject;
export const OK = "DATAFLOW_HEALTH_OK";
export const BROKEN = "DATAFLOW_HEALTH_BROKEN";
export const UNKNOWN = "DATAFLOW_HEALTH_UNKNOWN";
