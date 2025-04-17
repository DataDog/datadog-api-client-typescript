import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleCreateRequestData } from "./MonitorNotificationRuleCreateRequestData";

/**
 * Request for creating a monitor notification rule.
 */
export class MonitorNotificationRuleCreateRequest {
  /**
   * Object to create a monitor notification rule.
   */
  "data": MonitorNotificationRuleCreateRequestData;
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
      type: "MonitorNotificationRuleCreateRequestData",
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
    return MonitorNotificationRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
