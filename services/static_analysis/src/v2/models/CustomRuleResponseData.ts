import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRule } from "./CustomRule";
import { CustomRuleDataType } from "./CustomRuleDataType";

export class CustomRuleResponseData {
  "attributes": CustomRule;
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
      type: "CustomRule",
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
