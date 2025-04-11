import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricSeries } from "./MetricSeries";

/**
 * The metrics' payload.
 */
export class MetricPayload {
  /**
   * A list of timeseries to submit to Datadog.
   */
  "series": Array<MetricSeries>;
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
    series: {
      baseName: "series",
      type: "Array<MetricSeries>",
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
    return MetricPayload.attributeTypeMap;
  }

  public constructor() {}
}
