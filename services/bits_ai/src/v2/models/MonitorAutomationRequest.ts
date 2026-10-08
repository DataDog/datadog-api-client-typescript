import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorAutomationRequestData } from "./MonitorAutomationRequestData";

/**
 * Set whether Bits automatically investigates alerts from a monitor.
 */
export class MonitorAutomationRequest {
  /**
   * The automatic investigation settings to apply.
   */
  "data": MonitorAutomationRequestData;
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
      type: "MonitorAutomationRequestData",
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
    return MonitorAutomationRequest.attributeTypeMap;
  }

  public constructor() {}
}
