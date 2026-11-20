import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems444686320020270101Width } from "./GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems444686320020270101Width";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446863200 {
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
  "width": GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems444686320020270101Width;
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
      type: "GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems444686320020270101Width",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446863200.attributeTypeMap;
  }

  public constructor() {}
}
