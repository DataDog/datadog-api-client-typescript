import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageQuotaUpdateData } from "./UsageQuotaUpdateData";

/**
 * Request containing the usage quota resource to update.
 */
export class UsageQuotaUpdateRequest {
  /**
   * A usage quota resource to update.
   */
  "data": UsageQuotaUpdateData;
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
      type: "UsageQuotaUpdateData",
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
    return UsageQuotaUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
