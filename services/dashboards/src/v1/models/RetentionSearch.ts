import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionCohortCriteria } from "./RetentionCohortCriteria";
import { RetentionEntity } from "./RetentionEntity";
import { RetentionFilters } from "./RetentionFilters";
import { RetentionReturnCondition } from "./RetentionReturnCondition";
import { RetentionReturnCriteria } from "./RetentionReturnCriteria";

/**
 * Search configuration for retention queries.
 */
export class RetentionSearch {
  /**
   * Cohort criteria for retention queries.
   */
  "cohortCriteria": RetentionCohortCriteria;
  /**
   * Filters for retention queries.
   */
  "filters"?: RetentionFilters;
  /**
   * Entity to track for retention.
   */
  "retentionEntity": RetentionEntity;
  /**
   * Condition for counting user return.
   */
  "returnCondition": RetentionReturnCondition;
  /**
   * Return criteria for retention queries.
   */
  "returnCriteria"?: RetentionReturnCriteria;
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
      type: "RetentionCohortCriteria",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "RetentionFilters",
    },
    retentionEntity: {
      baseName: "retention_entity",
      type: "RetentionEntity",
      required: true,
    },
    returnCondition: {
      baseName: "return_condition",
      type: "RetentionReturnCondition",
      required: true,
    },
    returnCriteria: {
      baseName: "return_criteria",
      type: "RetentionReturnCriteria",
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
