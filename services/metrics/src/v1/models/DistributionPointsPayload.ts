import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DistributionPointsSeries } from "./DistributionPointsSeries";

/**
 * The distribution points payload.
 */
export class DistributionPointsPayload {
  /**
   * A list of distribution points series to submit to Datadog.
   */
  "series": Array<DistributionPointsSeries>;
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
      type: "Array<DistributionPointsSeries>",
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
    return DistributionPointsPayload.attributeTypeMap;
  }

  public constructor() {}
}
