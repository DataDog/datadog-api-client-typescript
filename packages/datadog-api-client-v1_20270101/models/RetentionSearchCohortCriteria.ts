/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BaseProductAnalyticsQuery } from "./BaseProductAnalyticsQuery";
import { RetentionSearchCohortCriteriaTimeInterval } from "./RetentionSearchCohortCriteriaTimeInterval";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RetentionSearchCohortCriteria {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "baseQuery": BaseProductAnalyticsQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timeInterval": RetentionSearchCohortCriteriaTimeInterval;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    baseQuery: {
      baseName: "base_query",
      type: "BaseProductAnalyticsQuery",
      required: true,
    },
    timeInterval: {
      baseName: "time_interval",
      type: "RetentionSearchCohortCriteriaTimeInterval",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionSearchCohortCriteria.attributeTypeMap;
  }

  public constructor() {}
}
