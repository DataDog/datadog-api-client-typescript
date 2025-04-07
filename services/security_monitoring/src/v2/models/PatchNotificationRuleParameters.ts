import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchNotificationRuleParametersData } from "./PatchNotificationRuleParametersData";

/**
 * Body of the notification rule patch request.
 */
export class PatchNotificationRuleParameters {
  /**
   * Data of the notification rule patch request: the rule ID, the rule type, and the rule attributes. All fields are required.
   */
  "data"?: PatchNotificationRuleParametersData;
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
      type: "PatchNotificationRuleParametersData",
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
    return PatchNotificationRuleParameters.attributeTypeMap;
  }

  public constructor() {}
}
