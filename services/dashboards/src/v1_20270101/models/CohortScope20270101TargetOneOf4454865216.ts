import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CohortScopeTargetAggregationType } from "./CohortScopeTargetAggregationType";
import { CohortScopeTargetAnyOfAnyOfItemValue } from "./CohortScopeTargetAnyOfAnyOfItemValue";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CohortScope20270101TargetOneOf4454865216 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CohortScopeTargetAggregationType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "value": CohortScopeTargetAnyOfAnyOfItemValue;
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
      type: "CohortScopeTargetAggregationType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "CohortScopeTargetAnyOfAnyOfItemValue",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CohortScope20270101TargetOneOf4454865216.attributeTypeMap;
  }

  public constructor() {}
}
