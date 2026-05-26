import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRulesetDataType } from "./AiCustomRulesetDataType";
import { AiCustomRulesetUpdateAttributes } from "./AiCustomRulesetUpdateAttributes";

/**
 * Request data for updating an AI custom ruleset.
 */
export class AiCustomRulesetUpdateData {
  /**
   * Attributes for updating an AI custom ruleset.
   */
  "attributes"?: AiCustomRulesetUpdateAttributes;
  /**
   * The ruleset identifier.
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
      type: "AiCustomRulesetUpdateAttributes",
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
    return AiCustomRulesetUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
