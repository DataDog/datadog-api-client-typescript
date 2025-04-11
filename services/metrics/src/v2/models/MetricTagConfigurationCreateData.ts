import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricTagConfigurationCreateAttributes } from "./MetricTagConfigurationCreateAttributes";
import { MetricTagConfigurationType } from "./MetricTagConfigurationType";

/**
 * Object for a single metric to be configure tags on.
 */
export class MetricTagConfigurationCreateData {
  /**
   * Object containing the definition of a metric tag configuration to be created.
   */
  "attributes"?: MetricTagConfigurationCreateAttributes;
  /**
   * The metric name for this resource.
   */
  "id": string;
  /**
   * The metric tag configuration resource type.
   */
  "type": MetricTagConfigurationType;
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
      type: "MetricTagConfigurationCreateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricTagConfigurationType",
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
    return MetricTagConfigurationCreateData.attributeTypeMap;
  }

  public constructor() {}
}
