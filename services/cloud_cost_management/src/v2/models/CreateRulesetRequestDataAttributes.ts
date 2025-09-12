import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateRulesetRequestDataAttributesRulesItems } from "./CreateRulesetRequestDataAttributesRulesItems";

/**
 * The definition of `CreateRulesetRequestDataAttributes` object.
 */
export class CreateRulesetRequestDataAttributes {
  /**
   * The `attributes` `enabled`.
   */
  "enabled"?: boolean;
  /**
   * The `attributes` `rules`.
   */
  "rules": Array<CreateRulesetRequestDataAttributesRulesItems>;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    rules: {
      baseName: "rules",
      type: "Array<CreateRulesetRequestDataAttributesRulesItems>",
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
    return CreateRulesetRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
