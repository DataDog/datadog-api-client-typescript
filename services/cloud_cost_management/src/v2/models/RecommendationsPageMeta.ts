import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RecommendationsPageMetaPage } from "./RecommendationsPageMetaPage";

/**
 * Top-level JSON:API meta object for paginated cost recommendation responses.
 */
export class RecommendationsPageMeta {
  /**
   * Pagination metadata for a page of cost recommendations.
   */
  "page"?: RecommendationsPageMetaPage;
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
    page: {
      baseName: "page",
      type: "RecommendationsPageMetaPage",
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
    return RecommendationsPageMeta.attributeTypeMap;
  }

  public constructor() {}
}
