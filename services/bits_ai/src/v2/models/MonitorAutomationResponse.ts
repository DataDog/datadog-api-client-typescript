import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorAutomationData } from "./MonitorAutomationData";

/**
 * Automatic investigation settings for a monitor.
 */
export class MonitorAutomationResponse {
  /**
   * Automatic investigation configuration identified by monitor ID.
   */
  "data": MonitorAutomationData;
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
    data: {
      baseName: "data",
      type: "MonitorAutomationData",
      required: true,
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
    return MonitorAutomationResponse.attributeTypeMap;
  }

  public constructor() {}
}
