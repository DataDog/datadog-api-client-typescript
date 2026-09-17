import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RecommendationsFilterRequestDataAttributes } from "./RecommendationsFilterRequestDataAttributes";
import { RecommendationsFilterRequestDataType } from "./RecommendationsFilterRequestDataType";

/**
 * JSON:API resource containing the cost recommendations filter. This legacy search contract
 * uses the resource ID for the filter expression rather than as a persistent resource identifier.
 */
export class RecommendationsFilterRequestData {
  /**
   * Attributes used to filter and sort cost recommendations.
   */
  "attributes"?: RecommendationsFilterRequestDataAttributes;
  /**
   * Filter expression applied to the recommendations. The server treats an omitted ID as `*`
   * and returns all recommendations.
   */
  "id"?: string;
  /**
   * Legacy JSON:API resource type required by the cost recommendations search decoder.
   */
  "type": RecommendationsFilterRequestDataType;
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
      type: "RecommendationsFilterRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RecommendationsFilterRequestDataType",
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
    return RecommendationsFilterRequestData.attributeTypeMap;
  }

  public constructor() {}
}
