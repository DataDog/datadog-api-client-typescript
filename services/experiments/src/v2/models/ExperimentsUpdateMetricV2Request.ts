import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsUpdateMetricV2RequestData } from "./ExperimentsUpdateMetricV2RequestData";

/**
 * Request to update the metric.
 */
export class ExperimentsUpdateMetricV2Request {
  /**
   * JSON:API resource containing the metric identity and fields.
   */
  "data": ExperimentsUpdateMetricV2RequestData;
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
      type: "ExperimentsUpdateMetricV2RequestData",
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
    return ExperimentsUpdateMetricV2Request.attributeTypeMap;
  }

  public constructor() {}
}
