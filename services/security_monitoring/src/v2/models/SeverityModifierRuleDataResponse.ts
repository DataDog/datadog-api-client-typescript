import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeverityModifierRuleAttributesResponse } from "./SeverityModifierRuleAttributesResponse";
import { SeverityModifierRuleType } from "./SeverityModifierRuleType";

/**
 * The data object for a severity modifier rule as returned by the API.
 */
export class SeverityModifierRuleDataResponse {
  /**
   * Attributes of a severity modifier rule as returned by the API.
   */
  "attributes": SeverityModifierRuleAttributesResponse;
  /**
   * The ID of the severity modifier rule.
   */
  "id": string;
  /**
   * The JSON:API type for severity modifier rules.
   */
  "type": SeverityModifierRuleType;
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
    attributes: {
      baseName: "attributes",
      type: "SeverityModifierRuleAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "SeverityModifierRuleType",
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
    return SeverityModifierRuleDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
