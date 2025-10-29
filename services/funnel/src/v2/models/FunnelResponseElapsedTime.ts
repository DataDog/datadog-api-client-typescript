import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class FunnelResponseElapsedTime {
  "avg"?: number;
  "max"?: number;
  "min"?: number;
  "p5"?: number;
  "p50"?: number;
  "p95"?: number;
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
    avg: {
      baseName: "avg",
      type: "number",
      format: "int64",
    },
    max: {
      baseName: "max",
      type: "number",
      format: "int64",
    },
    min: {
      baseName: "min",
      type: "number",
      format: "int64",
    },
    p5: {
      baseName: "p5",
      type: "number",
      format: "int64",
    },
    p50: {
      baseName: "p50",
      type: "number",
      format: "int64",
    },
    p95: {
      baseName: "p95",
      type: "number",
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
    return FunnelResponseElapsedTime.attributeTypeMap;
  }

  public constructor() {}
}
