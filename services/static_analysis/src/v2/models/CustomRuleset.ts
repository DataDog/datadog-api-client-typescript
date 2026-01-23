import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRulesetAttributes } from "./CustomRulesetAttributes";
import { CustomRulesetDataType } from "./CustomRulesetDataType";

export class CustomRuleset {
  "attributes": CustomRulesetAttributes;
  /**
   * Ruleset identifier
   */
  "id": string;
  /**
   * Resource type
   */
  "type": CustomRulesetDataType;
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
      type: "CustomRulesetAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomRulesetDataType",
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
    return CustomRuleset.attributeTypeMap;
  }

  public constructor() {}
}
