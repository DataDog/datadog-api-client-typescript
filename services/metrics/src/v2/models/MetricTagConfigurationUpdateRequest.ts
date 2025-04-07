import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricTagConfigurationUpdateData } from "./MetricTagConfigurationUpdateData";

/**
 * Request object that includes the metric that you would like to edit the tag configuration on.
 */
export class MetricTagConfigurationUpdateRequest {
  /**
   * Object for a single tag configuration to be edited.
   */
  "data": MetricTagConfigurationUpdateData;
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
      type: "MetricTagConfigurationUpdateData",
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
    return MetricTagConfigurationUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
