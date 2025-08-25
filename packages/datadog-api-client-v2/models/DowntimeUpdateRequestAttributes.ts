/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeMonitorIdentifier } from "./DowntimeMonitorIdentifier";
import { DowntimeNotifyEndStateActions } from "./DowntimeNotifyEndStateActions";
import { DowntimeNotifyEndStateTypes } from "./DowntimeNotifyEndStateTypes";
import { DowntimeScheduleUpdateRequest } from "./DowntimeScheduleUpdateRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the downtime to update.
 */
export class DowntimeUpdateRequestAttributes {
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
   * Schedule for the downtime.
   */
  "schedule"?: DowntimeScheduleUpdateRequest;
  /**
   * The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/).
   */
  "scope"?: string;

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
    displayTimezone: {
      baseName: "display_timezone",
      type: "string",
    },
    message: {
      baseName: "message",
      type: "string",
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
      type: "DowntimeScheduleUpdateRequest",
    },
    scope: {
      baseName: "scope",
      type: "string",
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
    return DowntimeUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
