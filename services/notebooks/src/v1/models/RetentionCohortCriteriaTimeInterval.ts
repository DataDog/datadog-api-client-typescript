import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CalendarInterval } from "./CalendarInterval";
import { RetentionCohortCriteriaTimeIntervalType } from "./RetentionCohortCriteriaTimeIntervalType";

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
