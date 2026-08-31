import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageQuotaResponseData } from "./UsageQuotaResponseData";

/**
 * Response containing a usage quota.
 */
export class UsageQuotaResponse {
  /**
   * A usage quota resource.
   */
  "data": UsageQuotaResponseData;
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
      type: "UsageQuotaResponseData",
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
    return UsageQuotaResponse.attributeTypeMap;
  }

  public constructor() {}
}
