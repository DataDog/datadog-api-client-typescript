import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsMetricCollectionV2DTODataAttributes } from "./ExperimentsMetricCollectionV2DTODataAttributes";
import { ExperimentsPatchMetricCollectionV2RequestDataType } from "./ExperimentsPatchMetricCollectionV2RequestDataType";

/**
 * JSON:API resource containing the metric collection identity and fields.
 */
export class ExperimentsMetricCollectionV2DTOData {
  /**
   * Details of the metric collection.
   */
  "attributes"?: ExperimentsMetricCollectionV2DTODataAttributes;
  /**
   * ID of the metric collection.
   */
  "id": string;
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
      type: "ExperimentsMetricCollectionV2DTODataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return ExperimentsMetricCollectionV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
