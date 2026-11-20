import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DetectionRuleStreamQuery20270101Sort } from "./DetectionRuleStreamQuery20270101Sort";
import { DetectionRuleStreamQueryDataSource } from "./DetectionRuleStreamQueryDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DetectionRuleStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": DetectionRuleStreamQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryString": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: DetectionRuleStreamQuery20270101Sort;
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
    dataSource: {
      baseName: "data_source",
      type: "DetectionRuleStreamQueryDataSource",
      required: true,
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "DetectionRuleStreamQuery20270101Sort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DetectionRuleStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
