/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for a monitor alert trigger.
 */
export class MonitorAlertTriggerAttributes {
  /**
   * The event ID associated with the monitor alert.
   */
  "eventId": string;
  /**
   * The timestamp of the event in Unix milliseconds.
   */
  "eventTs": number;
  /**
   * The monitor ID that triggered the alert.
   */
  "monitorId": number;

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
    eventId: {
      baseName: "event_id",
      type: "string",
      required: true,
    },
    eventTs: {
      baseName: "event_ts",
      type: "number",
      required: true,
      format: "int64",
    },
    monitorId: {
      baseName: "monitor_id",
      type: "number",
      required: true,
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
    return MonitorAlertTriggerAttributes.attributeTypeMap;
  }

  public constructor() {}
}
