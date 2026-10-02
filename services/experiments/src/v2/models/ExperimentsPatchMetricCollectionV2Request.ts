import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchMetricCollectionV2RequestData } from "./ExperimentsPatchMetricCollectionV2RequestData";

/**
 * Request to update the metric collection.
 */
export class ExperimentsPatchMetricCollectionV2Request {
  /**
   * JSON:API resource containing the metric collection identity and fields.
   */
  "data": ExperimentsPatchMetricCollectionV2RequestData;
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
      type: "ExperimentsPatchMetricCollectionV2RequestData",
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
    return ExperimentsPatchMetricCollectionV2Request.attributeTypeMap;
  }

  public constructor() {}
}
