import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScatterplotBackendTableRequest } from "./ScatterplotBackendTableRequest";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotRequests20270101OneOf4461761120 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "table": ScatterplotBackendTableRequest;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    table: {
      baseName: "table",
      type: "ScatterplotBackendTableRequest",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotRequests20270101OneOf4461761120.attributeTypeMap;
  }

  public constructor() {}
}
