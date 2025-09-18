import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateRulesetRequestDataAttributes } from "./CreateRulesetRequestDataAttributes";
import { CreateRulesetRequestDataType } from "./CreateRulesetRequestDataType";

/**
 * The definition of `CreateRulesetRequestData` object.
 */
export class CreateRulesetRequestData {
  /**
   * The definition of `CreateRulesetRequestDataAttributes` object.
   */
  "attributes"?: CreateRulesetRequestDataAttributes;
  /**
   * The `CreateRulesetRequestData` `id`.
   */
  "id"?: string;
  /**
   * Create ruleset resource type.
   */
  "type": CreateRulesetRequestDataType;
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
      type: "CreateRulesetRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CreateRulesetRequestDataType",
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
    return CreateRulesetRequestData.attributeTypeMap;
  }

  public constructor() {}
}
