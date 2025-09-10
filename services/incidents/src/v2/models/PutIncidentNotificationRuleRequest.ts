import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentNotificationRuleUpdateData } from "./IncidentNotificationRuleUpdateData";

/**
 * Put request for a notification rule.
 */
export class PutIncidentNotificationRuleRequest {
  /**
   * Notification rule data for an update request.
   */
  "data": IncidentNotificationRuleUpdateData;
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
      type: "IncidentNotificationRuleUpdateData",
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
    return PutIncidentNotificationRuleRequest.attributeTypeMap;
  }

  public constructor() {}
}
