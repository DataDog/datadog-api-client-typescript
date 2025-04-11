import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object of the monitor identifier.
 */
export class DowntimeMonitorIdentifierId {
  /**
   * ID of the monitor to prevent notifications.
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
    return DowntimeMonitorIdentifierId.attributeTypeMap;
  }

  public constructor() {}
}
