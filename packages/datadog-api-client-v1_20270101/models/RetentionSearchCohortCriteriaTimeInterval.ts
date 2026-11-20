/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionSearchCohortCriteriaTimeInterval20270101Value } from "./RetentionSearchCohortCriteriaTimeInterval20270101Value";
import { RetentionSearchCohortCriteriaTimeIntervalType } from "./RetentionSearchCohortCriteriaTimeIntervalType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RetentionSearchCohortCriteriaTimeInterval {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": RetentionSearchCohortCriteriaTimeIntervalType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "value": RetentionSearchCohortCriteriaTimeInterval20270101Value;

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
      type: "RetentionSearchCohortCriteriaTimeIntervalType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "RetentionSearchCohortCriteriaTimeInterval20270101Value",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionSearchCohortCriteriaTimeInterval.attributeTypeMap;
  }

  public constructor() {}
}
