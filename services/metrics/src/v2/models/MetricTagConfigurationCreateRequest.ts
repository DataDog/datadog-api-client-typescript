import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricTagConfigurationCreateData } from "./MetricTagConfigurationCreateData";

/**
 * Request object that includes the metric that you would like to configure tags for.
 */
export class MetricTagConfigurationCreateRequest {
  /**
   * Object for a single metric to be configure tags on.
   */
  "data": MetricTagConfigurationCreateData;
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
      type: "MetricTagConfigurationCreateData",
      required: true,
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
    return MetricTagConfigurationCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
