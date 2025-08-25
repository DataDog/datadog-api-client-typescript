/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Represents the resource type for a group of users assigned to handle on-call duties within a team.
 */

export type TeamOnCallRespondersDataType =
  | typeof TEAM_ONCALL_RESPONDERS
  | UnparsedObject;
export const TEAM_ONCALL_RESPONDERS = "team_oncall_responders";
