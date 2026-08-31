import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageQuotaCreateData } from "./UsageQuotaCreateData";

/**
 * A JSON:API bulk request containing an array of usage quota resources rather than a single resource.
 */
export class UsageQuotasCreateRequest {
  /**
   * A bulk list of usage quota resources to create or update by scope.
   */
  "data": Array<UsageQuotaCreateData>;
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
      type: "Array<UsageQuotaCreateData>",
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
    return UsageQuotasCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
