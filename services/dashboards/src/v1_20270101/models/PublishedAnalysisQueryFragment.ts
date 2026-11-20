import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PublishedAnalysisQueryFragmentDataSource } from "./PublishedAnalysisQueryFragmentDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class PublishedAnalysisQueryFragment {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": PublishedAnalysisQueryFragmentDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasetId": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
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
    dataSource: {
      baseName: "data_source",
      type: "PublishedAnalysisQueryFragmentDataSource",
      required: true,
    },
    datasetId: {
      baseName: "dataset_id",
      type: "string",
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PublishedAnalysisQueryFragment.attributeTypeMap;
  }

  public constructor() {}
}
