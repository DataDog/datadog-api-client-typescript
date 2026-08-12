import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountPermissions } from "./IntegrationAccountPermissions";
import { TwilioAuthentication } from "./TwilioAuthentication";
import { TwilioDataflow } from "./TwilioDataflow";
import { TwilioSettings } from "./TwilioSettings";

/**
 * Attributes of a Twilio integration account. The Twilio configuration is hoisted directly onto the attributes; there is no interface wrapper because the `twilio` interface is fixed by the endpoint path.
 */
export class TwilioAccountAttributes {
  /**
   * Authentication methods supported by the Twilio interface. Exactly one is set, selected by its `type`.
   */
  "authentication": TwilioAuthentication;
  /**
   * Dataflows for the Twilio interface.
   */
  "dataflows"?: Array<TwilioDataflow>;
  /**
   * Human-readable name of the account.
   */
  "name": string;
  /**
   * Read-only permission information for the account, derived from its restriction policy.
   */
  "permissions"?: IntegrationAccountPermissions;
  /**
   * Twilio interface settings.
   */
  "settings"?: TwilioSettings;
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
    authentication: {
      baseName: "authentication",
      type: "TwilioAuthentication",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "Array<TwilioDataflow>",
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
    settings: {
      baseName: "settings",
      type: "TwilioSettings",
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
    return TwilioAccountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
