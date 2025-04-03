import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateNotificationRuleParametersData } from "./CreateNotificationRuleParametersData";

/**
 * Body of the notification rule create request.
 */
export class CreateNotificationRuleParameters {
  /**
   * Data of the notification rule create request: the rule type, and the rule attributes. All fields are required.
   */
  "data"?: CreateNotificationRuleParametersData;
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
      type: "CreateNotificationRuleParametersData",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateNotificationRuleParameters.attributeTypeMap;
  }

  public constructor() {}
}
