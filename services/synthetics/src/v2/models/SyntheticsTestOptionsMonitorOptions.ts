import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestOptionsMonitorOptionsNotificationPresetName } from "./SyntheticsTestOptionsMonitorOptionsNotificationPresetName";

/**
 * Object containing the options for a Synthetic test as a monitor
 * (for example, renotification).
 */
export class SyntheticsTestOptionsMonitorOptions {
  /**
   * Message to include in the escalation notification.
   */
  "escalationMessage"?: string;
  /**
   * The name of the preset for the notification for the monitor.
   */
  "notificationPresetName"?: SyntheticsTestOptionsMonitorOptionsNotificationPresetName;
  /**
   * Time interval before renotifying if the test is still failing
   * (in minutes).
   */
  "renotifyInterval"?: number;
  /**
   * The number of times to renotify if the test is still failing.
   */
  "renotifyOccurrences"?: number;
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
    escalationMessage: {
      baseName: "escalation_message",
      type: "string",
    },
    notificationPresetName: {
      baseName: "notification_preset_name",
      type: "SyntheticsTestOptionsMonitorOptionsNotificationPresetName",
    },
    renotifyInterval: {
      baseName: "renotify_interval",
      type: "number",
      format: "int64",
    },
    renotifyOccurrences: {
      baseName: "renotify_occurrences",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestOptionsMonitorOptions.attributeTypeMap;
  }

  public constructor() {}
}
