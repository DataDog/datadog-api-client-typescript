import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRulesetDataType } from "./AiCustomRulesetDataType";
import { AiCustomRulesetResponseAttributes } from "./AiCustomRulesetResponseAttributes";

/**
 * Response data for an AI custom ruleset.
 */
export class AiCustomRulesetResponseData {
  /**
   * Response attributes of an AI custom ruleset.
   */
  "attributes": AiCustomRulesetResponseAttributes;
  /**
   * The ruleset identifier.
   */
  "id": string;
  /**
   * AI custom ruleset resource type.
   */
  "type": AiCustomRulesetDataType;
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
      type: "AiCustomRulesetResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiCustomRulesetDataType",
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
    return AiCustomRulesetResponseData.attributeTypeMap;
  }

  public constructor() {}
}
