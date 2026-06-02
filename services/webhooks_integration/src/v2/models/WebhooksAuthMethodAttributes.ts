import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebhooksAuthMethodProtocol } from "./WebhooksAuthMethodProtocol";

/**
 * Attributes of a webhooks auth method.
 */
export class WebhooksAuthMethodAttributes {
  /**
   * Authentication protocol used by the auth method.
   */
  "protocol"?: WebhooksAuthMethodProtocol;
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
    protocol: {
      baseName: "protocol",
      type: "WebhooksAuthMethodProtocol",
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
    return WebhooksAuthMethodAttributes.attributeTypeMap;
  }

  public constructor() {}
}
