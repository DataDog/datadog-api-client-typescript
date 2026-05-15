/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The column type. "group" for dimension columns, "number" for metric columns.
 */

export type CommitmentsScalarColumnType =
  | typeof GROUP
  | typeof NUMBER
  | UnparsedObject;
export const GROUP = "group";
export const NUMBER = "number";
