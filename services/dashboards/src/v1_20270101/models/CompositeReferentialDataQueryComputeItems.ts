import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CompositeReferentialDataQueryComputeItemsAggregation } from "./CompositeReferentialDataQueryComputeItemsAggregation";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CompositeReferentialDataQueryComputeItems {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": CompositeReferentialDataQueryComputeItemsAggregation;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "CompositeReferentialDataQueryComputeItemsAggregation",
      required: true,
    },
    column: {
      baseName: "column",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CompositeReferentialDataQueryComputeItems.attributeTypeMap;
  }

  public constructor() {}
}
