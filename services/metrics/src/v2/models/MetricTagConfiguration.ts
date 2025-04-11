import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricTagConfigurationAttributes } from "./MetricTagConfigurationAttributes";
import { MetricTagConfigurationType } from "./MetricTagConfigurationType";

/**
 * Object for a single metric tag configuration.
 */
export class MetricTagConfiguration {
  /**
   * Object containing the definition of a metric tag configuration attributes.
   */
  "attributes"?: MetricTagConfigurationAttributes;
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  /**
   * The metric tag configuration resource type.
   */
  "type"?: MetricTagConfigurationType;
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
    attributes: {
      baseName: "attributes",
      type: "MetricTagConfigurationAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MetricTagConfigurationType",
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
    return MetricTagConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
