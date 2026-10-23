import { UnparsedObject } from "@datadog/datadog-api-client";

import { OnCallPageLink } from "./OnCallPageLink";
import { OnCallPageScheduledAction } from "./OnCallPageScheduledAction";
import { ScheduleUser } from "./ScheduleUser";
import { TeamReference } from "./TeamReference";

/**
 * A resource related to a page.
 */
export type OnCallPagesIncluded =
  | ScheduleUser
  | TeamReference
  | OnCallPageScheduledAction
  | OnCallPageLink
  | UnparsedObject;
