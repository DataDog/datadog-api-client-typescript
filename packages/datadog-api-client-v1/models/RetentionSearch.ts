/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionCohortCriteria } from "./RetentionCohortCriteria";
import { RetentionEntity } from "./RetentionEntity";
import { RetentionFilters } from "./RetentionFilters";
import { RetentionReturnCondition } from "./RetentionReturnCondition";
import { RetentionReturnCriteria } from "./RetentionReturnCriteria";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
