/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatasetColumn } from "./DatasetColumn";
import { PublishedAnalysisDataSource } from "./PublishedAnalysisDataSource";
import { TimeWindow } from "./TimeWindow";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class PublishedAnalysis {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns"?: Array<DatasetColumn>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": PublishedAnalysisDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasetId": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryFilter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timeWindow"?: TimeWindow;

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
      type: "Array<DatasetColumn>",
    },
    dataSource: {
      baseName: "data_source",
      type: "PublishedAnalysisDataSource",
      required: true,
    },
    datasetId: {
      baseName: "dataset_id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    queryFilter: {
      baseName: "query_filter",
      type: "string",
    },
    timeWindow: {
      baseName: "time_window",
      type: "TimeWindow",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PublishedAnalysis.attributeTypeMap;
  }

  public constructor() {}
}
