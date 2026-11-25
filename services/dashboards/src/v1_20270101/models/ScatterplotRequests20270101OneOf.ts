import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScatterplotBackendAxisRequest } from "./ScatterplotBackendAxisRequest";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotRequests20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "x": ScatterplotBackendAxisRequest;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "y": ScatterplotBackendAxisRequest;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    x: {
      baseName: "x",
      type: "ScatterplotBackendAxisRequest",
      required: true,
    },
    y: {
      baseName: "y",
      type: "ScatterplotBackendAxisRequest",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotRequests20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
