/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionSearchCohortCriteria } from "./RetentionSearchCohortCriteria";
import { RetentionSearchFilters } from "./RetentionSearchFilters";
import { RetentionSearchRetentionEntity } from "./RetentionSearchRetentionEntity";
import { RetentionSearchReturnCondition } from "./RetentionSearchReturnCondition";
import { RetentionSearchReturnCriteria } from "./RetentionSearchReturnCriteria";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
