import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScatterplotBackendTableRequest20270101OneOfQuery } from "./ScatterplotBackendTableRequest20270101OneOfQuery";
import { ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451204320 } from "./ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451204320";
import { ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451204640 } from "./ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451204640";
import { TabularProjection } from "./TabularProjection";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotBackendTableRequest20270101OneOf4461521920 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "projection"?: TabularProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": ScatterplotBackendTableRequest20270101OneOfQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451204320;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451204640;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    projection: {
      baseName: "projection",
      type: "TabularProjection",
    },
    query: {
      baseName: "query",
      type: "ScatterplotBackendTableRequest20270101OneOfQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451204320",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451204640",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotBackendTableRequest20270101OneOf4461521920.attributeTypeMap;
  }

  public constructor() {}
}
