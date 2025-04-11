import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object listing all metric names stored by Datadog since a given time.
 */
export class MetricsListResponse {
  /**
   * Time when the metrics were active, seconds since the Unix epoch.
   */
  "from"?: string;
  /**
   * List of metric names.
   */
  "metrics"?: Array<string>;
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
    from: {
      baseName: "from",
      type: "string",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<string>",
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
    return MetricsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
