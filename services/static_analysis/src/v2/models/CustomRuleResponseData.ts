import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRuleAttributes } from "./CustomRuleAttributes";
import { CustomRuleDataType } from "./CustomRuleDataType";

/**
 * Data object returned in a custom rule response, including its ID, type, and attributes.
 */
export class CustomRuleResponseData {
  /**
   * Attributes of a custom static analysis rule, including its most recent revision and revision history.
   */
  "attributes": CustomRuleAttributes;
  /**
   * Rule identifier
   */
  "id": string;
  /**
   * Resource type
   */
  "type": CustomRuleDataType;
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
      type: "CustomRuleAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomRuleDataType",
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
    return CustomRuleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
