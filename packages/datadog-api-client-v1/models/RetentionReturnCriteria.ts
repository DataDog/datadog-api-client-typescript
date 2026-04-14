/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionReturnCriteriaTimeInterval } from "./RetentionReturnCriteriaTimeInterval";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Return criteria for retention queries.
 */
export class RetentionReturnCriteria {
  /**
   * Base query for Product Analytics.
   */
  "baseQuery": any;
  /**
   * Time interval for return criteria.
   */
  "timeInterval"?: RetentionReturnCriteriaTimeInterval;

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
      type: "RetentionReturnCriteriaTimeInterval",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionReturnCriteria.attributeTypeMap;
  }

  public constructor() {}
}
