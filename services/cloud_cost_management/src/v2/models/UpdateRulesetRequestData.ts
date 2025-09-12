import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateRulesetRequestDataAttributes } from "./UpdateRulesetRequestDataAttributes";
import { UpdateRulesetRequestDataType } from "./UpdateRulesetRequestDataType";

/**
 * The definition of `UpdateRulesetRequestData` object.
 */
export class UpdateRulesetRequestData {
  /**
   * The definition of `UpdateRulesetRequestDataAttributes` object.
   */
  "attributes"?: UpdateRulesetRequestDataAttributes;
  /**
   * The `UpdateRulesetRequestData` `id`.
   */
  "id"?: string;
  /**
   * Update ruleset resource type.
   */
  "type": UpdateRulesetRequestDataType;
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
      type: "UpdateRulesetRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UpdateRulesetRequestDataType",
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
    return UpdateRulesetRequestData.attributeTypeMap;
  }

  public constructor() {}
}
