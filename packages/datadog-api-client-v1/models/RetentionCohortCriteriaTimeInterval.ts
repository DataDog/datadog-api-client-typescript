/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CalendarInterval } from "./CalendarInterval";
import { RetentionCohortCriteriaTimeIntervalType } from "./RetentionCohortCriteriaTimeIntervalType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Time interval for cohort criteria.
 */
export class RetentionCohortCriteriaTimeInterval {
  /**
   * Type of time interval for cohort criteria.
   */
  "type": RetentionCohortCriteriaTimeIntervalType;
  /**
   * Calendar interval definition.
   */
  "value": CalendarInterval;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "RetentionCohortCriteriaTimeIntervalType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "CalendarInterval",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionCohortCriteriaTimeInterval.attributeTypeMap;
  }

  public constructor() {}
}
