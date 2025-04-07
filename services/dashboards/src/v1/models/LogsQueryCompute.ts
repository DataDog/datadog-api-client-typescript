import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Define computation for a log query.
 */
export class LogsQueryCompute {
  /**
   * The aggregation method.
   */
  "aggregation": string;
  /**
   * Facet name.
   */
  "facet"?: string;
  /**
   * Define a time interval in seconds.
   */
  "interval"?: number;
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
    aggregation: {
      baseName: "aggregation",
      type: "string",
      required: true,
    },
    facet: {
      baseName: "facet",
      type: "string",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
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
    return LogsQueryCompute.attributeTypeMap;
  }

  public constructor() {}
}
