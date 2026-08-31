import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageQuotaResponseData } from "./UsageQuotaResponseData";
import { UsageQuotasResponseMeta } from "./UsageQuotasResponseMeta";

/**
 * Response containing a paginated list of usage quotas.
 */
export class UsageQuotasListResponse {
  /**
   * A list of usage quota resources.
   */
  "data": Array<UsageQuotaResponseData>;
  /**
   * Pagination metadata for a usage quota list response.
   */
  "meta": UsageQuotasResponseMeta;
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
      type: "Array<UsageQuotaResponseData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "UsageQuotasResponseMeta",
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
    return UsageQuotasListResponse.attributeTypeMap;
  }

  public constructor() {}
}
