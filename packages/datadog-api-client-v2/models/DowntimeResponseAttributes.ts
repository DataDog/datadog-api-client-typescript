/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeMonitorIdentifier } from "./DowntimeMonitorIdentifier";
import { DowntimeNotifyEndStateActions } from "./DowntimeNotifyEndStateActions";
import { DowntimeNotifyEndStateTypes } from "./DowntimeNotifyEndStateTypes";
import { DowntimeScheduleResponse } from "./DowntimeScheduleResponse";
import { DowntimeStatus } from "./DowntimeStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Downtime details.
 */
export class DowntimeResponseAttributes {
  /**
   * Time that the downtime was canceled.
   */
  "canceled"?: Date;
  /**
   * Creation time of the downtime.
   */
  "created"?: Date;
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
  "modified"?: Date;
  /**
   * Monitor identifier for the downtime.
   */
  "monitorIdentifier"?: DowntimeMonitorIdentifier;
  /**
   * If the first recovery notification during a downtime should be muted.
   */
  "muteFirstRecoveryNotification"?: boolean;
  /**
   * States that will trigger a monitor notification when the `notify_end_types` action occurs.
   */
  "notifyEndStates"?: Array<DowntimeNotifyEndStateTypes>;
  /**
   * Actions that will trigger a monitor notification if the downtime is in the `notify_end_types` state.
   */
  "notifyEndTypes"?: Array<DowntimeNotifyEndStateActions>;
  /**
   * The schedule that defines when the monitor starts, stops, and recurs. There are two types of schedules:
   * one-time and recurring. Recurring schedules may have up to five RRULE-based recurrences. If no schedules are
   * provided, the downtime will begin immediately and never end.
   */
  "schedule"?: DowntimeScheduleResponse;
  /**
   * The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/).
   */
  "scope"?: string;
  /**
   * The current status of the downtime.
   */
  "status"?: DowntimeStatus;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    canceled: {
      baseName: "canceled",
      type: "Date",
      format: "date-time",
    },
    created: {
      baseName: "created",
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
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    monitorIdentifier: {
      baseName: "monitor_identifier",
      type: "DowntimeMonitorIdentifier",
    },
    muteFirstRecoveryNotification: {
      baseName: "mute_first_recovery_notification",
      type: "boolean",
    },
    notifyEndStates: {
      baseName: "notify_end_states",
      type: "Array<DowntimeNotifyEndStateTypes>",
    },
    notifyEndTypes: {
      baseName: "notify_end_types",
      type: "Array<DowntimeNotifyEndStateActions>",
    },
    schedule: {
      baseName: "schedule",
      type: "DowntimeScheduleResponse",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "DowntimeStatus",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
