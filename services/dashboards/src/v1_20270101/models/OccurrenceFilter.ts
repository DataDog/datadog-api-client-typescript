import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OccurrenceFilterOperator } from "./OccurrenceFilterOperator";
import { OccurrenceFilterValue } from "./OccurrenceFilterValue";

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
