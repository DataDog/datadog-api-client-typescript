/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Specifies storage type as indexes or online-archives
 */

export type LogsStorageTier =
  | typeof INDEXES
  | typeof ONLINE_ARCHIVES
  | UnparsedObject;
export const INDEXES = "indexes";
export const ONLINE_ARCHIVES = "online-archives";
