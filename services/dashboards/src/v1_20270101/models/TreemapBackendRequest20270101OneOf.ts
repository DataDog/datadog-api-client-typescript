import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AdvancedQueryDataset } from "./AdvancedQueryDataset";
import { TabularProjection } from "./TabularProjection";
import { TreemapBackendRequestAnyOfAnyOfItemRequestType } from "./TreemapBackendRequestAnyOfAnyOfItemRequestType";
import { TreemapBackendRequestAnyOfAnyOfItemResponseFormat } from "./TreemapBackendRequestAnyOfAnyOfItemResponseFormat";
import { TreemapRequestStyle } from "./TreemapRequestStyle";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TreemapBackendRequest20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasetToQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasets": Array<AdvancedQueryDataset>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "projection"?: TabularProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": TreemapBackendRequestAnyOfAnyOfItemRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": TreemapBackendRequestAnyOfAnyOfItemResponseFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: TreemapRequestStyle;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    datasetToQuery: {
      baseName: "dataset_to_query",
      type: "string",
      required: true,
    },
    datasets: {
      baseName: "datasets",
      type: "Array<AdvancedQueryDataset>",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    projection: {
      baseName: "projection",
      type: "TabularProjection",
    },
    requestType: {
      baseName: "request_type",
      type: "TreemapBackendRequestAnyOfAnyOfItemRequestType",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "TreemapBackendRequestAnyOfAnyOfItemResponseFormat",
      required: true,
    },
    style: {
      baseName: "style",
      type: "TreemapRequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TreemapBackendRequest20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
