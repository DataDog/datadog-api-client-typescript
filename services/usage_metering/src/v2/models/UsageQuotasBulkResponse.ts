import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageQuotaBulkResultData } from "./UsageQuotaBulkResultData";

/**
 * Response containing the result of a bulk usage quota create-or-update request. Returned with a `200` status regardless of whether individual items succeeded or failed; check each item's `error` attribute to determine its outcome.
 */
export class UsageQuotasBulkResponse {
  /**
   * The results of writing each usage quota in a bulk create-or-update request, in the same order as the request.
   */
  "data": Array<UsageQuotaBulkResultData>;
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
      type: "Array<UsageQuotaBulkResultData>",
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
    return UsageQuotasBulkResponse.attributeTypeMap;
  }

  public constructor() {}
}
