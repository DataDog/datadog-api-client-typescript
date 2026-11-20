import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmRecommendationsStreamQuery20270101GroupBy } from "../../v1/models/ApmRecommendationsStreamQuery20270101GroupBy";
import { ApmRecommendationsStreamQuery20270101Sort } from "./ApmRecommendationsStreamQuery20270101Sort";
import { ApmRecommendationsStreamQueryDataSource } from "./ApmRecommendationsStreamQueryDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ApmRecommendationsStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customServiceTags"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": ApmRecommendationsStreamQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "env"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: ApmRecommendationsStreamQuery20270101GroupBy;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "priorities"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryString": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "recommendationTypes"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "services"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: ApmRecommendationsStreamQuery20270101Sort;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "statuses"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "teams"?: Array<string>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    customServiceTags: {
      baseName: "custom_service_tags",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "ApmRecommendationsStreamQueryDataSource",
      required: true,
    },
    env: {
      baseName: "env",
      type: "string",
    },
    groupBy: {
      baseName: "group_by",
      type: "ApmRecommendationsStreamQuery20270101GroupBy",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    priorities: {
      baseName: "priorities",
      type: "Array<string>",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    recommendationTypes: {
      baseName: "recommendation_types",
      type: "Array<string>",
    },
    services: {
      baseName: "services",
      type: "Array<string>",
    },
    sort: {
      baseName: "sort",
      type: "ApmRecommendationsStreamQuery20270101Sort",
    },
    statuses: {
      baseName: "statuses",
      type: "Array<string>",
    },
    teams: {
      baseName: "teams",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApmRecommendationsStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
