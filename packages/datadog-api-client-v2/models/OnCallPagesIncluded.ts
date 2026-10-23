/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallPageLink } from "./OnCallPageLink";
import { OnCallPageScheduledAction } from "./OnCallPageScheduledAction";
import { ScheduleUser } from "./ScheduleUser";
import { TeamReference } from "./TeamReference";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A resource related to a page.
 */

export type OnCallPagesIncluded =
  | ScheduleUser
  | TeamReference
  | OnCallPageScheduledAction
  | OnCallPageLink
  | UnparsedObject;
