import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudflareAccountType } from "./CloudflareAccountType";
import { CloudflareAccountUpdateRequestAttributes } from "./CloudflareAccountUpdateRequestAttributes";

/**
 * Data object for updating a Cloudflare account.
 */
export class CloudflareAccountUpdateRequestData {
  /**
   * Attributes object for updating a Cloudflare account.
   */
  "attributes"?: CloudflareAccountUpdateRequestAttributes;
  /**
   * The JSON:API type for this API. Should always be `cloudflare-accounts`.
   */
  "type"?: CloudflareAccountType;
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
      type: "CloudflareAccountUpdateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "CloudflareAccountType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudflareAccountUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
