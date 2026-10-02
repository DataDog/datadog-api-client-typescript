import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateMetricV2RequestData } from "./ExperimentsCreateMetricV2RequestData";

/**
 * Request to create an experiment metric.
 */
export class ExperimentsCreateMetricV2Request {
  /**
   * Metric resource to create.
   */
  "data": ExperimentsCreateMetricV2RequestData;
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
    data: {
      baseName: "data",
      type: "ExperimentsCreateMetricV2RequestData",
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
    return ExperimentsCreateMetricV2Request.attributeTypeMap;
  }

  public constructor() {}
}
