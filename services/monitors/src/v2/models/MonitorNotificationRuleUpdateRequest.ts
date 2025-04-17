import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleUpdateRequestData } from "./MonitorNotificationRuleUpdateRequestData";

/**
 * Request for updating a monitor notification rule.
 */
export class MonitorNotificationRuleUpdateRequest {
  /**
   * Object to update a monitor notification rule.
   */
  "data": MonitorNotificationRuleUpdateRequestData;
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
      type: "MonitorNotificationRuleUpdateRequestData",
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
    return MonitorNotificationRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
