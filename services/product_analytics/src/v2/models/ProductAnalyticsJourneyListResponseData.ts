import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyListResponseAttributes } from "./ProductAnalyticsJourneyListResponseAttributes";
import { ProductAnalyticsJourneyListResponseType } from "./ProductAnalyticsJourneyListResponseType";

/**
 * The single JSON:API resource holding the entities matching a journey. Its attributes contain
 * the returned rows and the total number of rows that matched, ignoring `limit`.
 */
export class ProductAnalyticsJourneyListResponseData {
  /**
   * Attributes of a journey list response.
   */
  "attributes": ProductAnalyticsJourneyListResponseAttributes;
  /**
   * Identifier of this result.
   */
  "id": string;
  /**
   * The resource type identifier for a journey list response.
   */
  "type": ProductAnalyticsJourneyListResponseType;
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
      type: "ProductAnalyticsJourneyListResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsJourneyListResponseType",
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
    return ProductAnalyticsJourneyListResponseData.attributeTypeMap;
  }

  public constructor() {}
}
