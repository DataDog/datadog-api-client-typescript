import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRuleRevisionRequestData } from "./AiCustomRuleRevisionRequestData";

/**
 * Request body for creating an AI custom rule revision.
 */
export class AiCustomRuleRevisionRequest {
  /**
   * Request data for creating an AI custom rule revision.
   */
  "data"?: AiCustomRuleRevisionRequestData;
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
      type: "AiCustomRuleRevisionRequestData",
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
    return AiCustomRuleRevisionRequest.attributeTypeMap;
  }

  public constructor() {}
}
