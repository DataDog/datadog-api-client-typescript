import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRuleRevisionResponseData } from "./AiCustomRuleRevisionResponseData";

/**
 * Response containing a single AI custom rule revision.
 */
export class AiCustomRuleRevisionResponse {
  /**
   * Response data for an AI custom rule revision.
   */
  "data": AiCustomRuleRevisionResponseData;
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
    data: {
      baseName: "data",
      type: "AiCustomRuleRevisionResponseData",
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
    return AiCustomRuleRevisionResponse.attributeTypeMap;
  }

  public constructor() {}
}
