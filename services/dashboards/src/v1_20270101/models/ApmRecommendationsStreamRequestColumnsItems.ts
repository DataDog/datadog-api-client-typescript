import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmRecommendationsStreamRequestColumnsItems20270101Width } from "./ApmRecommendationsStreamRequestColumnsItems20270101Width";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ApmRecommendationsStreamRequestColumnsItems {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "field": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "width": ApmRecommendationsStreamRequestColumnsItems20270101Width;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alias: {
      baseName: "alias",
      type: "string",
    },
    field: {
      baseName: "field",
      type: "string",
      required: true,
    },
    width: {
      baseName: "width",
      type: "ApmRecommendationsStreamRequestColumnsItems20270101Width",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApmRecommendationsStreamRequestColumnsItems.attributeTypeMap;
  }

  public constructor() {}
}
