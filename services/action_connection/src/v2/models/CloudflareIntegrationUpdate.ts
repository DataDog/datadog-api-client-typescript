import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudflareCredentialsUpdate } from "./CloudflareCredentialsUpdate";
import { CloudflareIntegrationType } from "./CloudflareIntegrationType";

/**
 * The definition of the `CloudflareIntegrationUpdate` object.
 */
export class CloudflareIntegrationUpdate {
  /**
   * The definition of the `CloudflareCredentialsUpdate` object.
   */
  "credentials"?: CloudflareCredentialsUpdate;
  /**
   * The definition of the `CloudflareIntegrationType` object.
   */
  "type": CloudflareIntegrationType;
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
    credentials: {
      baseName: "credentials",
      type: "CloudflareCredentialsUpdate",
    },
    type: {
      baseName: "type",
      type: "CloudflareIntegrationType",
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
    return CloudflareIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
