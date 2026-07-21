/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Lifecycle state of a DDSQL tabular query response.
 * `running` means the query is still executing and the client should poll
 * the fetch endpoint with the returned `query_id`. `completed` means the
 * result set is inlined in `columns` and no further polling is required.
 */

export type DdsqlTabularQueryState =
  | typeof RUNNING
  | typeof COMPLETED
  | UnparsedObject;
export const RUNNING = "running";
export const COMPLETED = "completed";
