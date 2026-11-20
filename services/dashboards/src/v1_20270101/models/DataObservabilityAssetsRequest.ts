import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DataObservabilityAssetsQuery } from "./DataObservabilityAssetsQuery";
import { DataObservabilityAssetsRequestColumnsItems } from "./DataObservabilityAssetsRequestColumnsItems";
import { DataObservabilityAssetsRequestResponseFormat } from "./DataObservabilityAssetsRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DataObservabilityAssetsRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<DataObservabilityAssetsRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": DataObservabilityAssetsQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": DataObservabilityAssetsRequestResponseFormat;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<DataObservabilityAssetsRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "DataObservabilityAssetsQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "DataObservabilityAssetsRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DataObservabilityAssetsRequest.attributeTypeMap;
  }

  public constructor() {}
}
