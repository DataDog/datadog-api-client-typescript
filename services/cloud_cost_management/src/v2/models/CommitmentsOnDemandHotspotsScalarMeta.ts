import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata for the on-demand hot-spots scalar response.
 */
export class CommitmentsOnDemandHotspotsScalarMeta {
  /**
   * Active on-demand filters applied to the response.
   */
  "onDemandFilters": string;
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
    onDemandFilters: {
      baseName: "on_demand_filters",
      type: "string",
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
    return CommitmentsOnDemandHotspotsScalarMeta.attributeTypeMap;
  }

  public constructor() {}
}
