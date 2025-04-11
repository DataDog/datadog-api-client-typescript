import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricTagConfiguration } from "./MetricTagConfiguration";

/**
 * Response object which includes a single metric's tag configuration.
 */
export class MetricTagConfigurationResponse {
  /**
   * Object for a single metric tag configuration.
   */
  "data"?: MetricTagConfiguration;
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
      type: "MetricTagConfiguration",
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
    return MetricTagConfigurationResponse.attributeTypeMap;
  }

  public constructor() {}
}
