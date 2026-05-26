import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRulesetDataType } from "./AiCustomRulesetDataType";
import { AiCustomRulesetRequestAttributes } from "./AiCustomRulesetRequestAttributes";

/**
 * Request data for creating an AI custom ruleset.
 */
export class AiCustomRulesetRequestData {
  /**
   * Attributes for creating an AI custom ruleset.
   */
  "attributes"?: AiCustomRulesetRequestAttributes;
  /**
   * The ruleset identifier, which must match the name.
   */
  "id"?: string;
  /**
   * AI custom ruleset resource type.
   */
  "type"?: AiCustomRulesetDataType;
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
      type: "AiCustomRulesetRequestAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AiCustomRulesetDataType",
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
    return AiCustomRulesetRequestData.attributeTypeMap;
  }

  public constructor() {}
}
