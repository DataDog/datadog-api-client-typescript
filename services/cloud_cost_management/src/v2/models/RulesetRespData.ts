import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RulesetRespDataAttributes } from "./RulesetRespDataAttributes";
import { RulesetRespDataType } from "./RulesetRespDataType";

/**
 * The definition of `RulesetRespData` object.
 */
export class RulesetRespData {
  /**
   * The definition of `RulesetRespDataAttributes` object.
   */
  "attributes"?: RulesetRespDataAttributes;
  /**
   * The `RulesetRespData` `id`.
   */
  "id"?: string;
  /**
   * Ruleset resource type.
   */
  "type": RulesetRespDataType;
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
      type: "RulesetRespDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RulesetRespDataType",
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
    return RulesetRespData.attributeTypeMap;
  }

  public constructor() {}
}
