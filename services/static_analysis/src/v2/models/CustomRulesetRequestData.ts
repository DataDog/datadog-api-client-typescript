import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRulesetDataType } from "./CustomRulesetDataType";
import { CustomRulesetRequestDataAttributes } from "./CustomRulesetRequestDataAttributes";

export class CustomRulesetRequestData {
  "attributes"?: CustomRulesetRequestDataAttributes;
  /**
   * Ruleset identifier
   */
  "id"?: string;
  /**
   * Resource type
   */
  "type"?: CustomRulesetDataType;
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
      type: "CustomRulesetRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CustomRulesetDataType",
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
    return CustomRulesetRequestData.attributeTypeMap;
  }

  public constructor() {}
}
