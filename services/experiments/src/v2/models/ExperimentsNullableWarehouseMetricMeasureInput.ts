import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Optional warehouse measure. Use null when the other measure is selected.
 */
export class ExperimentsNullableWarehouseMetricMeasureInput {
  /**
   * Identifier of the warehouse metric measure.
   */
  "id": string;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return ExperimentsNullableWarehouseMetricMeasureInput.attributeTypeMap;
  }

  public constructor() {}
}
