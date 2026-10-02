import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchMetricCollectionV2RequestDataAttributes } from "./ExperimentsPatchMetricCollectionV2RequestDataAttributes";
import { ExperimentsPatchMetricCollectionV2RequestDataType } from "./ExperimentsPatchMetricCollectionV2RequestDataType";

/**
 * JSON:API resource containing the metric collection identity and fields.
 */
export class ExperimentsPatchMetricCollectionV2RequestData {
  /**
   * Fields supplied to update the metric collection.
   */
  "attributes"?: ExperimentsPatchMetricCollectionV2RequestDataAttributes;
  /**
   * ID of the metric collection.
   */
  "id"?: string;
  /**
   * Metric collections resource type.
   */
  "type": ExperimentsPatchMetricCollectionV2RequestDataType;
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
      type: "ExperimentsPatchMetricCollectionV2RequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ExperimentsPatchMetricCollectionV2RequestDataType",
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
    return ExperimentsPatchMetricCollectionV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
