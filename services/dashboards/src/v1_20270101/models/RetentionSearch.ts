import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionSearchCohortCriteria } from "./RetentionSearchCohortCriteria";
import { RetentionSearchFilters } from "./RetentionSearchFilters";
import { RetentionSearchRetentionEntity } from "./RetentionSearchRetentionEntity";
import { RetentionSearchReturnCondition } from "./RetentionSearchReturnCondition";
import { RetentionSearchReturnCriteria } from "./RetentionSearchReturnCriteria";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RetentionSearch {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "cohortCriteria": RetentionSearchCohortCriteria;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filters"?: RetentionSearchFilters;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "retentionEntity": RetentionSearchRetentionEntity;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "returnCondition": RetentionSearchReturnCondition;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "returnCriteria"?: RetentionSearchReturnCriteria;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cohortCriteria: {
      baseName: "cohort_criteria",
      type: "RetentionSearchCohortCriteria",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "RetentionSearchFilters",
    },
    retentionEntity: {
      baseName: "retention_entity",
      type: "RetentionSearchRetentionEntity",
      required: true,
    },
    returnCondition: {
      baseName: "return_condition",
      type: "RetentionSearchReturnCondition",
      required: true,
    },
    returnCriteria: {
      baseName: "return_criteria",
      type: "RetentionSearchReturnCriteria",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionSearch.attributeTypeMap;
  }

  public constructor() {}
}
