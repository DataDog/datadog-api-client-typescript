import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyEntity } from "./ProductAnalyticsJourneyEntity";

/**
 * Attributes of a journey list response.
 */
export class ProductAnalyticsJourneyListResponseAttributes {
  /**
   * The kind of entity returned by a journey list query.
   */
  "entity": ProductAnalyticsJourneyEntity;
  /**
   * The returned rows.
   */
  "records": Array<{ [key: string]: any }>;
  /**
   * Total number of rows matching the query, ignoring `limit`.
   */
  "totalCount": number;
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
    entity: {
      baseName: "entity",
      type: "ProductAnalyticsJourneyEntity",
      required: true,
    },
    records: {
      baseName: "records",
      type: "Array<{ [key: string]: any; }>",
      required: true,
    },
    totalCount: {
      baseName: "total_count",
      type: "number",
      required: true,
      format: "int64",
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
    return ProductAnalyticsJourneyListResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
