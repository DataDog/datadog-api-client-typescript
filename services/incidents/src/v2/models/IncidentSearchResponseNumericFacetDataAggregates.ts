import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Aggregate information for numeric incident data.
 */
export class IncidentSearchResponseNumericFacetDataAggregates {
  /**
   * Maximum value of the numeric aggregates.
   */
  "max"?: number;
  /**
   * Minimum value of the numeric aggregates.
   */
  "min"?: number;
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
    max: {
      baseName: "max",
      type: "number",
      format: "double",
    },
    min: {
      baseName: "min",
      type: "number",
      format: "double",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentSearchResponseNumericFacetDataAggregates.attributeTypeMap;
  }

  public constructor() {}
}
