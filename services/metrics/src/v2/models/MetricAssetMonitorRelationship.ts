import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricMonitorType } from "./MetricMonitorType";

/**
 * An object of type `monitor` that can be referenced in the `included` data.
 */
export class MetricAssetMonitorRelationship {
  /**
   * The related monitor's ID.
   */
  "id"?: string;
  /**
   * Monitor resource type.
   */
  "type"?: MetricMonitorType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MetricMonitorType",
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
    return MetricAssetMonitorRelationship.attributeTypeMap;
  }

  public constructor() {}
}
