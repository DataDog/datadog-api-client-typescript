import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

/**
 * How many observations the latest saved refresh saw, regardless of the requested range. `null` when its counts can't be read.
 */
export class ExperimentsBanditObservationCountsV2 {
  /**
   * Observations the refresh couldn't use.
   */
  "invalid": number;
  /**
   * All observations (the sum of the other three counts).
   */
  "total": number;
  /**
   * Valid observations whose aggregation window is still open.
   */
  "validImmature": number;
  /**
   * Valid observations whose aggregation window has closed. The estimates use these.
   */
  "validMature": number;
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
    invalid: {
      baseName: "invalid",
      type: "number",
      required: true,
      format: "int64",
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
    },
    validImmature: {
      baseName: "valid_immature",
      type: "number",
      required: true,
      format: "int64",
    },
    validMature: {
      baseName: "valid_mature",
      type: "number",
      required: true,
      format: "int64",
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
    return ExperimentsBanditObservationCountsV2.attributeTypeMap;
  }

  public constructor() {}
}
