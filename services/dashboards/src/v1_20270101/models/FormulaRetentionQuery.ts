import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ComputationScope } from "./ComputationScope";
import { FormulaRetentionQueryDataSource } from "./FormulaRetentionQueryDataSource";
import { FormulaRetentionQuerySampling } from "./FormulaRetentionQuerySampling";
import { RetentionCompute } from "./RetentionCompute";
import { RetentionGroupByItems } from "./RetentionGroupByItems";
import { RetentionSearch } from "./RetentionSearch";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaRetentionQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "computationScope"?: ComputationScope;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": RetentionCompute;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaRetentionQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "excludeAnonymousTraffic"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<RetentionGroupByItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sampling"?: FormulaRetentionQuerySampling;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search": RetentionSearch;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    computationScope: {
      baseName: "computation_scope",
      type: "ComputationScope",
    },
    compute: {
      baseName: "compute",
      type: "RetentionCompute",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaRetentionQueryDataSource",
      required: true,
    },
    excludeAnonymousTraffic: {
      baseName: "exclude_anonymous_traffic",
      type: "boolean",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<RetentionGroupByItems>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    sampling: {
      baseName: "sampling",
      type: "FormulaRetentionQuerySampling",
    },
    search: {
      baseName: "search",
      type: "RetentionSearch",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaRetentionQuery.attributeTypeMap;
  }

  public constructor() {}
}
