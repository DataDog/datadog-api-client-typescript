import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudflareAccountUpdateRequestData } from "./CloudflareAccountUpdateRequestData";

/**
 * Payload schema when updating a Cloudflare account.
 */
export class CloudflareAccountUpdateRequest {
  /**
   * Data object for updating a Cloudflare account.
   */
  "data": CloudflareAccountUpdateRequestData;
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
      type: "CloudflareAccountUpdateRequestData",
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
    return CloudflareAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
