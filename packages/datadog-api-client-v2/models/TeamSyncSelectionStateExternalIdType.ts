/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of external identifier for the selection state item.
 * For GitHub synchronization, `team` refers to a GitHub team and
 * `organization` refers to a GitHub organization. For ServiceNow
 * synchronization, `team` refers to a ServiceNow group and
 * `organization` refers to a ServiceNow instance.
 */

export type TeamSyncSelectionStateExternalIdType =
  | typeof TEAM
  | typeof ORGANIZATION
  | UnparsedObject;
export const TEAM = "team";
export const ORGANIZATION = "organization";
