import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRuleRevisionDataType } from "./AiCustomRuleRevisionDataType";
import { AiCustomRuleRevisionRequestAttributes } from "./AiCustomRuleRevisionRequestAttributes";

/**
 * Request data for creating an AI custom rule revision.
 */
export class AiCustomRuleRevisionRequestData {
  /**
   * Attributes for creating an AI custom rule revision.
   */
  "attributes"?: AiCustomRuleRevisionRequestAttributes;
  /**
   * The revision identifier.
   */
  "id"?: string;
  /**
   * AI custom rule revision resource type.
   */
  "type"?: AiCustomRuleRevisionDataType;
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
      type: "AiCustomRuleRevisionRequestAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AiCustomRuleRevisionDataType",
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
    return AiCustomRuleRevisionRequestData.attributeTypeMap;
  }

  public constructor() {}
}
