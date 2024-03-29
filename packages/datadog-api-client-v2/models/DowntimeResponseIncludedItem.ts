/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeMonitorIncludedItem } from "./DowntimeMonitorIncludedItem";
import { User } from "./User";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * An object related to a downtime.
 */

export type DowntimeResponseIncludedItem =
  | User
  | DowntimeMonitorIncludedItem
  | UnparsedObject;
