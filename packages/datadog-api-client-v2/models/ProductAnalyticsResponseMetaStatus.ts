/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

export type ProductAnalyticsResponseMetaStatus =
  | typeof DONE
  | typeof RUNNING
  | typeof TIMEOUT
  | UnparsedObject;
export const DONE = "done";
export const RUNNING = "running";
export const TIMEOUT = "timeout";
