/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsMobileTestOptionsMonitorOptionsNotificationPresetName } from "./SyntheticsMobileTestOptionsMonitorOptionsNotificationPresetName";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the options for a mobile Synthetic test as a monitor
 * (for example, renotification).
 */
export class SyntheticsMobileTestOptionsMonitorOptions {
  /**
   * Message to include in the escalation notification.
   */
  "escalationMessage"?: string;
  /**
   * The definition of `SyntheticsMobileTestOptionsMonitorOptionsNotificationPresetName` object.
   */
  "notificationPresetName"?: SyntheticsMobileTestOptionsMonitorOptionsNotificationPresetName;
  /**
   * Time interval before renotifying if the test is still failing
   * (in minutes).
   */
  "renotifyInterval"?: number;
  /**
   * The `SyntheticsMobileTestOptionsMonitorOptions` `renotify_occurrences`.
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
      type: "SyntheticsMobileTestOptionsMonitorOptionsNotificationPresetName",
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsMobileTestOptionsMonitorOptions.attributeTypeMap;
  }

  public constructor() {}
}
