import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AdvancedQueryDataset } from "./AdvancedQueryDataset";
import { TabularAdvancedQueryRequestRequestType } from "./TabularAdvancedQueryRequestRequestType";
import { TabularAdvancedQueryRequestResponseFormat } from "./TabularAdvancedQueryRequestResponseFormat";
import { TabularProjection } from "./TabularProjection";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TabularAdvancedQueryRequest {
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
  "requestType": TabularAdvancedQueryRequestRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": TabularAdvancedQueryRequestResponseFormat;
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
      type: "TabularAdvancedQueryRequestRequestType",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "TabularAdvancedQueryRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TabularAdvancedQueryRequest.attributeTypeMap;
  }

  public constructor() {}
}
