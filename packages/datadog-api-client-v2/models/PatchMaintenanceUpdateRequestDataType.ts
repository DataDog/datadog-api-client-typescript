/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Maintenance updates resource type.
 */

export type PatchMaintenanceUpdateRequestDataType =
  | typeof MAINTENANCE_UPDATES
  | UnparsedObject;
export const MAINTENANCE_UPDATES = "maintenance_updates";
