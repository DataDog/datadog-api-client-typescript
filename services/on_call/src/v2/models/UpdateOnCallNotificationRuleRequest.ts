import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateOnCallNotificationRuleRequestData } from "./UpdateOnCallNotificationRuleRequestData";

/**
 * A top-level wrapper for updating a notification rule for a user
 */
export class UpdateOnCallNotificationRuleRequest {
  /**
   * Data for updating an on-call notification rule
   */
  "data": UpdateOnCallNotificationRuleRequestData;
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
      type: "UpdateOnCallNotificationRuleRequestData",
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
    return UpdateOnCallNotificationRuleRequest.attributeTypeMap;
  }

  public constructor() {}
}
