import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPUsageCostConfigPatchRequestAttributes } from "./GCPUsageCostConfigPatchRequestAttributes";
import { GCPUsageCostConfigPatchRequestType } from "./GCPUsageCostConfigPatchRequestType";

/**
 * GCP Usage Cost config patch data.
 */
export class GCPUsageCostConfigPatchData {
  /**
   * Attributes for GCP Usage Cost config patch request.
   */
  "attributes": GCPUsageCostConfigPatchRequestAttributes;
  /**
   * Type of GCP Usage Cost config patch request.
   */
  "type": GCPUsageCostConfigPatchRequestType;
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
      type: "GCPUsageCostConfigPatchRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GCPUsageCostConfigPatchRequestType",
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
    return GCPUsageCostConfigPatchData.attributeTypeMap;
  }

  public constructor() {}
}
