import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsClusteredPoint } from "./LLMObsPatternsClusteredPoint";

/**
 * Attributes of an LLM Observability patterns clustered points response.
 */
export class LLMObsPatternsClusteredPointsResponseAttributes {
  /**
   * Pagination token for the next page of points. Null if there are no more pages.
   */
  "nextPageToken": string | null;
  /**
   * List of clustered points.
   */
  "points": Array<LLMObsPatternsClusteredPoint>;
  /**
   * Identifier of the topic the points belong to.
   */
  "topicId": string;
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
    nextPageToken: {
      baseName: "next_page_token",
      type: "string",
      required: true,
    },
    points: {
      baseName: "points",
      type: "Array<LLMObsPatternsClusteredPoint>",
      required: true,
    },
    topicId: {
      baseName: "topic_id",
      type: "string",
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
    return LLMObsPatternsClusteredPointsResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
