import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RulesetStatusRespDataAttributes } from "./RulesetStatusRespDataAttributes";
import { RulesetStatusRespDataType } from "./RulesetStatusRespDataType";

/**
 * Processing status for a tag pipeline ruleset.
 */
export class RulesetStatusRespData {
  /**
   * Processing status for a tag pipeline ruleset.
   */
  "attributes": RulesetStatusRespDataAttributes;
  /**
   * The unique identifier of the ruleset.
   */
  "id": string;
  /**
   * Ruleset status resource type.
   */
  "type": RulesetStatusRespDataType;
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
      type: "RulesetStatusRespDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RulesetStatusRespDataType",
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
    return RulesetStatusRespData.attributeTypeMap;
  }

  public constructor() {}
}
