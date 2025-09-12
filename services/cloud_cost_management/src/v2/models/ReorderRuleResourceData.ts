import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReorderRuleResourceDataType } from "./ReorderRuleResourceDataType";

/**
 * The definition of `ReorderRuleResourceData` object.
 */
export class ReorderRuleResourceData {
  /**
   * The `ReorderRuleResourceData` `id`.
   */
  "id"?: string;
  /**
   * Arbitrary rule resource type.
   */
  "type": ReorderRuleResourceDataType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ReorderRuleResourceDataType",
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
    return ReorderRuleResourceData.attributeTypeMap;
  }

  public constructor() {}
}
