import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CellScopeCohortTargetAggregationType } from "./CellScopeCohortTargetAggregationType";
import { CellScopeCohortTargetAnyOfAnyOfItemValue } from "./CellScopeCohortTargetAnyOfAnyOfItemValue";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CellScope20270101CohortTargetOneOf4454617856 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CellScopeCohortTargetAggregationType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "value": CellScopeCohortTargetAnyOfAnyOfItemValue;
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
      type: "CellScopeCohortTargetAggregationType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "CellScopeCohortTargetAnyOfAnyOfItemValue",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CellScope20270101CohortTargetOneOf4454617856.attributeTypeMap;
  }

  public constructor() {}
}
