import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsUpdateMetricV2RequestDataAttributes } from "./ExperimentsUpdateMetricV2RequestDataAttributes";
import { MetricType } from "./MetricType";

/**
 * JSON:API resource containing the metric identity and fields.
 */
export class ExperimentsUpdateMetricV2RequestData {
  /**
   * Fields supplied to update the metric. Every attribute is optional; omit an attribute to leave it unchanged.
   */
  "attributes"?: ExperimentsUpdateMetricV2RequestDataAttributes;
  /**
   * ID of the metric.
   */
  "id"?: string;
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
      type: "ExperimentsUpdateMetricV2RequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
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
    return ExperimentsUpdateMetricV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
