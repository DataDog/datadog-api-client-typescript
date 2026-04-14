/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionCohortCriteriaTimeInterval } from "./RetentionCohortCriteriaTimeInterval";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cohort criteria for retention queries.
 */
export class RetentionCohortCriteria {
  /**
   * Base query for Product Analytics.
   */
  "baseQuery": any;
  /**
   * Time interval for cohort criteria.
   */
  "timeInterval": RetentionCohortCriteriaTimeInterval;

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
      type: "any",
      required: true,
    },
    timeInterval: {
      baseName: "time_interval",
      type: "RetentionCohortCriteriaTimeInterval",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionCohortCriteria.attributeTypeMap;
  }

  public constructor() {}
}
