/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BaseProductAnalyticsQuery } from "./BaseProductAnalyticsQuery";
import { RetentionSearchReturnCriteriaTimeInterval } from "./RetentionSearchReturnCriteriaTimeInterval";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RetentionSearchReturnCriteria {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "baseQuery": BaseProductAnalyticsQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timeInterval"?: RetentionSearchReturnCriteriaTimeInterval;

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
      type: "RetentionSearchReturnCriteriaTimeInterval",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionSearchReturnCriteria.attributeTypeMap;
  }

  public constructor() {}
}
