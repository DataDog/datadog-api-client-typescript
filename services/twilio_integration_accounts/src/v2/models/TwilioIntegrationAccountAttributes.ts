import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountPermissions } from "./IntegrationAccountPermissions";
import { TwilioInterface } from "./TwilioInterface";

/**
 * Attributes of a Twilio integration account.
 */
export class TwilioIntegrationAccountAttributes {
  /**
   * Twilio interface (source-type) configuration.
   */
  "_interface": TwilioInterface;
  /**
   * Human-readable name of the account.
   */
  "name": string;
  /**
   * Read-only permission information for the account, derived from its restriction policy.
   */
  "permissions"?: IntegrationAccountPermissions;
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
    _interface: {
      baseName: "interface",
      type: "TwilioInterface",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    permissions: {
      baseName: "permissions",
      type: "IntegrationAccountPermissions",
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
    return TwilioIntegrationAccountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
