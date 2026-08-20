/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionCohortCriteria } from "./ProductAnalyticsRetentionCohortCriteria";
import { ProductAnalyticsRetentionEntity } from "./ProductAnalyticsRetentionEntity";
import { ProductAnalyticsRetentionFilters } from "./ProductAnalyticsRetentionFilters";
import { ProductAnalyticsRetentionReturnCondition } from "./ProductAnalyticsRetentionReturnCondition";
import { ProductAnalyticsRetentionReturnCriteria } from "./ProductAnalyticsRetentionReturnCriteria";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the cohort and return criteria that make up a retention query.
 */
export class ProductAnalyticsRetentionSearch {
  /**
   * Defines the event that places an entity into a cohort, and how cohorts are bucketed over time.
   */
  "cohortCriteria": ProductAnalyticsRetentionCohortCriteria;
  /**
   * Filters narrowing the events considered by a retention query.
   */
  "filters"?: ProductAnalyticsRetentionFilters;
  /**
   * The entity whose retention is measured.
   */
  "retentionEntity": ProductAnalyticsRetentionEntity;
  /**
   * When an entity counts as having returned. Use `conversion_on` to count only entities that
   * returned during the period itself, or `conversion_on_or_after` to also count later returns.
   */
  "returnCondition": ProductAnalyticsRetentionReturnCondition;
  /**
   * Defines the event that counts as a return, and the window in which it must occur.
   */
  "returnCriteria"?: ProductAnalyticsRetentionReturnCriteria;

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
    cohortCriteria: {
      baseName: "cohort_criteria",
      type: "ProductAnalyticsRetentionCohortCriteria",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "ProductAnalyticsRetentionFilters",
    },
    retentionEntity: {
      baseName: "retention_entity",
      type: "ProductAnalyticsRetentionEntity",
      required: true,
    },
    returnCondition: {
      baseName: "return_condition",
      type: "ProductAnalyticsRetentionReturnCondition",
      required: true,
    },
    returnCriteria: {
      baseName: "return_criteria",
      type: "ProductAnalyticsRetentionReturnCriteria",
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
    return ProductAnalyticsRetentionSearch.attributeTypeMap;
  }

  public constructor() {}
}
