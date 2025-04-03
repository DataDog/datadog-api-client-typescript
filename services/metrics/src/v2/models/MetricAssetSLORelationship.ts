import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricSLOType } from "./MetricSLOType";

/**
 * An object of type `slos` that can be referenced in the `included` data.
 */
export class MetricAssetSLORelationship {
  /**
   * The SLO ID.
   */
  "id"?: string;
  /**
   * SLO resource type.
   */
  "type"?: MetricSLOType;
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
      type: "MetricSLOType",
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
    return MetricAssetSLORelationship.attributeTypeMap;
  }

  public constructor() {}
}
