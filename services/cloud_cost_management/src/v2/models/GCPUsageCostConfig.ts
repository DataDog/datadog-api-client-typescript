import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPUsageCostConfigAttributes } from "./GCPUsageCostConfigAttributes";
import { GCPUsageCostConfigType } from "./GCPUsageCostConfigType";

/**
 * Google Cloud Usage Cost config.
 */
export class GCPUsageCostConfig {
  /**
   * Attributes for a Google Cloud Usage Cost config.
   */
  "attributes": GCPUsageCostConfigAttributes;
  /**
   * The ID of the Google Cloud Usage Cost config.
   */
  "id"?: string;
  /**
   * Type of Google Cloud Usage Cost config.
   */
  "type": GCPUsageCostConfigType;
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
      type: "GCPUsageCostConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GCPUsageCostConfigType",
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
    return GCPUsageCostConfig.attributeTypeMap;
  }

  public constructor() {}
}
