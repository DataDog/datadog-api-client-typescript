import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Series } from "./Series";

/**
 * The metrics' payload.
 */
export class MetricsPayload {
  /**
   * A list of timeseries to submit to Datadog.
   */
  "series": Array<Series>;
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
      type: "Array<Series>",
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
    return MetricsPayload.attributeTypeMap;
  }

  public constructor() {}
}
