import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudflareAccountCreateRequestData } from "./CloudflareAccountCreateRequestData";

/**
 * Payload schema when adding a Cloudflare account.
 */
export class CloudflareAccountCreateRequest {
  /**
   * Data object for creating a Cloudflare account.
   */
  "data": CloudflareAccountCreateRequestData;
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
      type: "CloudflareAccountCreateRequestData",
      required: true,
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
    return CloudflareAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
