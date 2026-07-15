/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Identifies the resource type for a responder group linked to a schedule's on-call responders lookup.
 */

export type ScheduleOnCallRespondersDataRelationshipsRespondersDataItemsType =
  | typeof SCHEDULE_ONCALL_RESPONDER
  | UnparsedObject;
export const SCHEDULE_ONCALL_RESPONDER = "schedule_oncall_responder";
