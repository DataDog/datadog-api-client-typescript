import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateRulesetRequestDataAttributesRulesItems } from "./UpdateRulesetRequestDataAttributesRulesItems";

/**
 * The definition of `UpdateRulesetRequestDataAttributes` object.
 */
export class UpdateRulesetRequestDataAttributes {
  /**
   * The `attributes` `enabled`.
   */
  "enabled": boolean;
  /**
   * The `attributes` `last_version`.
   */
  "lastVersion"?: number;
  /**
   * The `attributes` `rules`.
   */
  "rules": Array<UpdateRulesetRequestDataAttributesRulesItems>;
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
      required: true,
    },
    lastVersion: {
      baseName: "last_version",
      type: "number",
      format: "int64",
    },
    rules: {
      baseName: "rules",
      type: "Array<UpdateRulesetRequestDataAttributesRulesItems>",
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
    return UpdateRulesetRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
