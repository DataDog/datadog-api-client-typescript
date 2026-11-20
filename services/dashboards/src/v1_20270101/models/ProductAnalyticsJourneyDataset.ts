import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AudienceFilters } from "./AudienceFilters";
import { DatasetColumn } from "./DatasetColumn";
import { ProductAnalyticsEventQuery } from "../../v1/models/ProductAnalyticsEventQuery";
import { ProductAnalyticsJourneyDatasetDataSource } from "./ProductAnalyticsJourneyDatasetDataSource";
import { ProductAnalyticsJourneyDatasetEntity } from "./ProductAnalyticsJourneyDatasetEntity";
import { ProductAnalyticsJourneyDatasetSearch } from "./ProductAnalyticsJourneyDatasetSearch";
import { TimeWindow } from "./TimeWindow";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ProductAnalyticsJourneyDataset {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "audienceFilters"?: AudienceFilters;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<DatasetColumn>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conversionTimeMs"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": ProductAnalyticsJourneyDatasetDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "entity": ProductAnalyticsJourneyDatasetEntity;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "expression": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "nodeObjects": { [key: string]: ProductAnalyticsEventQuery };
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search"?: ProductAnalyticsJourneyDatasetSearch;
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
    audienceFilters: {
      baseName: "audience_filters",
      type: "AudienceFilters",
    },
    columns: {
      baseName: "columns",
      type: "Array<DatasetColumn>",
      required: true,
    },
    conversionTimeMs: {
      baseName: "conversion_time_ms",
      type: "number",
      format: "double",
    },
    dataSource: {
      baseName: "data_source",
      type: "ProductAnalyticsJourneyDatasetDataSource",
      required: true,
    },
    entity: {
      baseName: "entity",
      type: "ProductAnalyticsJourneyDatasetEntity",
      required: true,
    },
    expression: {
      baseName: "expression",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    nodeObjects: {
      baseName: "node_objects",
      type: "{ [key: string]: ProductAnalyticsEventQuery; }",
      required: true,
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsJourneyDatasetSearch",
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
    return ProductAnalyticsJourneyDataset.attributeTypeMap;
  }

  public constructor() {}
}
