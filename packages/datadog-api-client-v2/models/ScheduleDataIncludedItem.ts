/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Layer } from "./Layer";
import { ScheduleMember } from "./ScheduleMember";
import { ScheduleUser } from "./ScheduleUser";
import { TeamReference } from "./TeamReference";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Any additional resources related to this schedule, such as teams and layers.
 */

export type ScheduleDataIncludedItem =
  | TeamReference
  | Layer
  | ScheduleMember
  | ScheduleUser
  | UnparsedObject;
