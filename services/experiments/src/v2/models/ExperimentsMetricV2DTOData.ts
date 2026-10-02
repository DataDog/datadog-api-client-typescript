import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsMetricV2DTODataAttributes } from "./ExperimentsMetricV2DTODataAttributes";
import { MetricType } from "./MetricType";

/**
 * JSON:API resource containing the metric identity and fields.
 */
export class ExperimentsMetricV2DTOData {
  /**
   * Details of the metric.
   */
  "attributes"?: ExperimentsMetricV2DTODataAttributes;
  /**
   * ID of the metric.
   */
  "id": string;
  /**
   * The metric resource type.
   */
  "type": MetricType;
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
      type: "ExperimentsMetricV2DTODataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "MetricType",
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
    return ExperimentsMetricV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
