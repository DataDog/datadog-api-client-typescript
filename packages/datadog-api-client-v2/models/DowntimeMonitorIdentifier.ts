/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeMonitorIdentifierId } from "./DowntimeMonitorIdentifierId";
import { DowntimeMonitorIdentifierTags } from "./DowntimeMonitorIdentifierTags";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Monitor identifier for the downtime.
 */

export type DowntimeMonitorIdentifier =
  | DowntimeMonitorIdentifierId
  | DowntimeMonitorIdentifierTags
  | UnparsedObject;
