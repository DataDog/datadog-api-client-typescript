import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostAIPreferredTagsAttributes } from "./CostAIPreferredTagsAttributes";
import { CostAIPreferredTagsType } from "./CostAIPreferredTagsType";

/**
 * Preferred tags data object.
 */
export class CostAIPreferredTagsData {
  /**
   * Attributes for the preferred tags response.
   */
  "attributes": CostAIPreferredTagsAttributes;
  /**
   * The unique identifier.
   */
  "id": string;
  /**
   * Preferred tags resource type.
   */
  "type": CostAIPreferredTagsType;
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
      type: "CostAIPreferredTagsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostAIPreferredTagsType",
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
    return CostAIPreferredTagsData.attributeTypeMap;
  }

  public constructor() {}
}
