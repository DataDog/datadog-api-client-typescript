import { AttributeTypeMap } from "@datadog/datadog-api-client";

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
