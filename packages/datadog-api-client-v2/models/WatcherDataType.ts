/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Rum replay watcher resource type.
 */

export type WatcherDataType = typeof RUM_REPLAY_WATCHER | UnparsedObject;
export const RUM_REPLAY_WATCHER = "rum_replay_watcher";
