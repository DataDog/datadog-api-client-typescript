import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudflareAccountCreateRequestAttributes } from "./CloudflareAccountCreateRequestAttributes";
import { CloudflareAccountType } from "./CloudflareAccountType";

/**
 * Data object for creating a Cloudflare account.
 */
export class CloudflareAccountCreateRequestData {
  /**
   * Attributes object for creating a Cloudflare account.
   */
  "attributes": CloudflareAccountCreateRequestAttributes;
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
      type: "CloudflareAccountCreateRequestAttributes",
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
    return CloudflareAccountCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
