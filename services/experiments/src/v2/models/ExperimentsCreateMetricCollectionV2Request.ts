import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateMetricCollectionV2RequestData } from "./ExperimentsCreateMetricCollectionV2RequestData";

/**
 * Request to create a reusable collection of metrics.
 */
export class ExperimentsCreateMetricCollectionV2Request {
  /**
   * Metric collection resource to create.
   */
  "data": ExperimentsCreateMetricCollectionV2RequestData;
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
      type: "ExperimentsCreateMetricCollectionV2RequestData",
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
    return ExperimentsCreateMetricCollectionV2Request.attributeTypeMap;
  }

  public constructor() {}
}
