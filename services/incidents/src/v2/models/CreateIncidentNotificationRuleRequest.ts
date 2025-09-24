import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentNotificationRuleCreateData } from "./IncidentNotificationRuleCreateData";

/**
 * Create request for a notification rule.
 */
export class CreateIncidentNotificationRuleRequest {
  /**
   * Notification rule data for a create request.
   */
  "data": IncidentNotificationRuleCreateData;
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
      type: "IncidentNotificationRuleCreateData",
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
    return CreateIncidentNotificationRuleRequest.attributeTypeMap;
  }

  public constructor() {}
}
