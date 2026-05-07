import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostAIPreferredTagsData } from "./CostAIPreferredTagsData";

/**
 * Response containing preferred cost allocation tags for AI agents.
 */
export class CostAIPreferredTagsResponse {
  /**
   * Preferred tags data object.
   */
  "data": CostAIPreferredTagsData;
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
      type: "CostAIPreferredTagsData",
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
    return CostAIPreferredTagsResponse.attributeTypeMap;
  }

  public constructor() {}
}
