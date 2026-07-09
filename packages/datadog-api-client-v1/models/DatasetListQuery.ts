/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatasetListQueryDataSourceType } from "./DatasetListQueryDataSourceType";
import { DatasetListQuerySort } from "./DatasetListQuerySort";
import { PublishedDatasetProvider } from "./PublishedDatasetProvider";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query that lists the rows of a published dataset (a DDSQL query) without aggregation.
 */
export class DatasetListQuery {
  /**
   * Identifies this as a published-dataset list query.
   */
  "dataSource": DatasetListQueryDataSourceType;
  /**
   * ID of the published dataset to query.
   */
  "datasetId": string;
  /**
   * Product page that published the dataset queried by a `DatasetListQuery`. `ddsql_query` is the only provider currently supported for host map widgets.
   */
  "datasetProvider": PublishedDatasetProvider;
  /**
   * Filter applied to the dataset's rows, using events-style search syntax.
   */
  "filter"?: string;
  /**
   * Maximum number of rows to return from the dataset query.
   */
  "limit"?: number;
  /**
   * Sort configuration for a `DatasetListQuery`.
   */
  "sort"?: DatasetListQuerySort;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
      type: "DatasetListQueryDataSourceType",
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
      format: "int64",
    },
    sort: {
      baseName: "sort",
      type: "DatasetListQuerySort",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
