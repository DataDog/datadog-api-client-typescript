/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OccurrenceFilterOperator } from "./OccurrenceFilterOperator";
import { OccurrenceFilterValue } from "./OccurrenceFilterValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class OccurrenceFilter {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "operator": OccurrenceFilterOperator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "value": OccurrenceFilterValue;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    operator: {
      baseName: "operator",
      type: "OccurrenceFilterOperator",
      required: true,
    },
    value: {
      baseName: "value",
      type: "OccurrenceFilterValue",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OccurrenceFilter.attributeTypeMap;
  }

  public constructor() {}
}
