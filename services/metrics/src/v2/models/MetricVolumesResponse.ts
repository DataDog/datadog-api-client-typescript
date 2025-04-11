import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricVolumes } from "./MetricVolumes";

/**
 * Response object which includes a single metric's volume.
 */
export class MetricVolumesResponse {
  /**
   * Possible response objects for a metric's volume.
   */
  "data"?: MetricVolumes;
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
      type: "MetricVolumes",
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
    return MetricVolumesResponse.attributeTypeMap;
  }

  public constructor() {}
}
