/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Handle resource type.
 */

export type MicrosoftTeamsApiHandleInfoType =
  | typeof MS_TEAMS_HANDLE_INFO
  | UnparsedObject;
export const MS_TEAMS_HANDLE_INFO = "ms-teams-handle-info";
