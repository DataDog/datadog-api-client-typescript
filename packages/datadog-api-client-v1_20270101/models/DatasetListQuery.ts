/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatasetListQueryDataSource } from "./DatasetListQueryDataSource";
import { DatasetListQuerySort } from "./DatasetListQuerySort";
import { PublishedDatasetProvider } from "./PublishedDatasetProvider";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DatasetListQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": DatasetListQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasetId": string | null;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasetProvider": PublishedDatasetProvider;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: DatasetListQuerySort;

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
      type: "DatasetListQueryDataSource",
      required: true,
    },
    datasetId: {
      baseName: "dataset_id",
      type: "string",
      required: true,
    },
    datasetProvider: {
      baseName: "dataset_provider",
      type: "PublishedDatasetProvider",
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "string",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    sort: {
      baseName: "sort",
      type: "DatasetListQuerySort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatasetListQuery.attributeTypeMap;
  }

  public constructor() {}
}
