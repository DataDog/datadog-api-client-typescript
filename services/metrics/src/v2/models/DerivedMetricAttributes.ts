import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DerivedMetricDefinition } from "./DerivedMetricDefinition";

/**
 * Attributes of a derived metric.
 */
export class DerivedMetricAttributes {
  /**
   * The definition of a derived metric as a formula over one or more queries.
   */
  "definition": DerivedMetricDefinition;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    definition: {
      baseName: "definition",
      type: "DerivedMetricDefinition",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DerivedMetricAttributes.attributeTypeMap;
  }

  public constructor() {}
}
