/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeAttributeMonitorIdentifier } from "./DowntimeAttributeMonitorIdentifier";
import { DowntimeAttributeNotifyEndStateActions } from "./DowntimeAttributeNotifyEndStateActions";
import { DowntimeAttributeNotifyEndStateTypes } from "./DowntimeAttributeNotifyEndStateTypes";
import { DowntimeAttributeScheduleResponse } from "./DowntimeAttributeScheduleResponse";
import { DowntimeStatusEnum } from "./DowntimeStatusEnum";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Downtime details.
 */
export class DowntimeAttributeResponse {
  /**
   * Creation time of the downtime.
   */
  "createdAt"?: Date;
  /**
   * The timezone in which to display the downtime's start and end times in Datadog applications. This is not used
   * as an offset for scheduling.
   */
  "displayTimezone"?: string;
  /**
   * A message to include with notifications for this downtime. Email notifications can be sent to specific users
   * by using the same `@username` notation as events.
   */
  "message"?: string;
  /**
   * Time that the downtime was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * Monitor identifier for the downtime.
   */
  "monitorIdentifier"?: DowntimeAttributeMonitorIdentifier;
  /**
   * If the first recovery notification during a downtime should be muted.
   */
  "muteFirstRecoveryNotification"?: boolean;
  /**
   * States that will trigger a monitor notification when the `notify_end_types` action occurs.
   */
  "notifyEndStates"?: Array<DowntimeAttributeNotifyEndStateTypes>;
  /**
   * Actions that will trigger a monitor notification if the downtime is in the `notify_end_types` state.
   */
  "notifyEndTypes"?: Array<DowntimeAttributeNotifyEndStateActions>;
  /**
   * The schedule that defines when the monitor starts, stops, and recurs. There are two types of schedules:
   * one-time and recurring. Recurring schedules may have up to five RRULE-based recurrences. If no schedules is
   * provided, the downtime will begin immediately and never end.
   */
  "schedule"?: DowntimeAttributeScheduleResponse;
  /**
   * The scope to which the downtime applies. Must be in
   * [simple grammar syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/).
   */
  "scope"?: string;
  /**
   * The current status of the downtime.
   */
  "status"?: DowntimeStatusEnum;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    displayTimezone: {
      baseName: "display_timezone",
      type: "string",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    monitorIdentifier: {
      baseName: "monitor_identifier",
      type: "DowntimeAttributeMonitorIdentifier",
    },
    muteFirstRecoveryNotification: {
      baseName: "mute_first_recovery_notification",
      type: "boolean",
    },
    notifyEndStates: {
      baseName: "notify_end_states",
      type: "Array<DowntimeAttributeNotifyEndStateTypes>",
    },
    notifyEndTypes: {
      baseName: "notify_end_types",
      type: "Array<DowntimeAttributeNotifyEndStateActions>",
    },
    schedule: {
      baseName: "schedule",
      type: "DowntimeAttributeScheduleResponse",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "DowntimeStatusEnum",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeAttributeResponse.attributeTypeMap;
  }

  public constructor() {}
}
