import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HistoricalDiscoveredProcessesDatasetDataSource } from "./HistoricalDiscoveredProcessesDatasetDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HistoricalDiscoveredProcessesDataset {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": HistoricalDiscoveredProcessesDatasetDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timestamp": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dataSource: {
      baseName: "data_source",
      type: "HistoricalDiscoveredProcessesDatasetDataSource",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    timestamp: {
      baseName: "timestamp",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HistoricalDiscoveredProcessesDataset.attributeTypeMap;
  }

  public constructor() {}
}
