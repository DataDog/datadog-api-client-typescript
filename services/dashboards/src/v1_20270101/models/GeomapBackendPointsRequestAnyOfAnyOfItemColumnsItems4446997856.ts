import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems444699785620270101Width } from "./GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems444699785620270101Width";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446997856 {
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
  "width": GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems444699785620270101Width;
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
      type: "GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems444699785620270101Width",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446997856.attributeTypeMap;
  }

  public constructor() {}
}
