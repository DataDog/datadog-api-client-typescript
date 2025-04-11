import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudflareAccountResponseAttributes } from "./CloudflareAccountResponseAttributes";
import { CloudflareAccountType } from "./CloudflareAccountType";

/**
 * Data object of a Cloudflare account.
 */
export class CloudflareAccountResponseData {
  /**
   * Attributes object of a Cloudflare account.
   */
  "attributes": CloudflareAccountResponseAttributes;
  /**
   * The ID of the Cloudflare account, a hash of the account name.
   */
  "id": string;
  /**
   * The JSON:API type for this API. Should always be `cloudflare-accounts`.
   */
  "type": CloudflareAccountType;
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
      type: "CloudflareAccountResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CloudflareAccountType",
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
    return CloudflareAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
