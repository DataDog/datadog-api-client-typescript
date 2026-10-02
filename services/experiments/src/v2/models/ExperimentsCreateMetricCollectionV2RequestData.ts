import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateMetricCollectionV2RequestDataAttributes } from "./ExperimentsCreateMetricCollectionV2RequestDataAttributes";
import { ExperimentsPatchMetricCollectionV2RequestDataType } from "./ExperimentsPatchMetricCollectionV2RequestDataType";

/**
 * Metric collection resource to create.
 */
export class ExperimentsCreateMetricCollectionV2RequestData {
  /**
   * Name, description, and metric selection for the new collection.
   */
  "attributes": ExperimentsCreateMetricCollectionV2RequestDataAttributes;
  /**
   * Optional JSON:API resource identifier field.
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
      type: "ExperimentsCreateMetricCollectionV2RequestDataAttributes",
      required: true,
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
    return ExperimentsCreateMetricCollectionV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
