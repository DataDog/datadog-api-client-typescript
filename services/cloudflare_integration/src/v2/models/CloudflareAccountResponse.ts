import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudflareAccountResponseData } from "./CloudflareAccountResponseData";

/**
 * The expected response schema when getting a Cloudflare account.
 */
export class CloudflareAccountResponse {
  /**
   * Data object of a Cloudflare account.
   */
  "data"?: CloudflareAccountResponseData;
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
      type: "CloudflareAccountResponseData",
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
    return CloudflareAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
