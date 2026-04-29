/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The destination type. The value must be `databricks_zerobus`.
 */

export type ObservabilityPipelineDatabricksZerobusDestinationType =
  | typeof DATABRICKS_ZEROBUS
  | UnparsedObject;
export const DATABRICKS_ZEROBUS = "databricks_zerobus";
