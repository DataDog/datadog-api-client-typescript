import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeverityModifierRuleDataUpdate } from "./SeverityModifierRuleDataUpdate";

/**
 * The body of a severity modifier rule update request.
 */
export class SeverityModifierRuleUpdateRequest {
  /**
   * The data object for a severity modifier rule update request. The `id` must match the `rule_id` path parameter.
   */
  "data": SeverityModifierRuleDataUpdate;
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
      type: "SeverityModifierRuleDataUpdate",
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
    return SeverityModifierRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
