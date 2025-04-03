import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricAssetAttributes } from "./MetricAssetAttributes";
import { MetricMonitorType } from "./MetricMonitorType";

/**
 * A monitor object with title.
 */
export class MetricMonitorAsset {
  /**
   * Assets related to the object, including title and url.
   */
  "attributes"?: MetricAssetAttributes;
  /**
   * The related monitor's ID.
   */
  "id": string;
  /**
   * Monitor resource type.
   */
  "type": MetricMonitorType;
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
      type: "MetricAssetAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricMonitorType",
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
    return MetricMonitorAsset.attributeTypeMap;
  }

  public constructor() {}
}
