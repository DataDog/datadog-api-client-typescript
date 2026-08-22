import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioIntegrationAccountAuthenticationUpdate } from "./TwilioIntegrationAccountAuthenticationUpdate";
import { TwilioIntegrationAccountSettingsUpdate } from "./TwilioIntegrationAccountSettingsUpdate";
import { TwilioIntegrationDataflowsRequest } from "./TwilioIntegrationDataflowsRequest";

/**
 * Writable attributes used to update a Twilio integration account. Every field is optional; only the fields provided are changed. When `dataflows` is provided, only the dataflow ids included in the request are modified; dataflows omitted from the map keep their current configuration.
 */
export class TwilioIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the Twilio integration account. Exactly one method is set.
   */
  "authentication"?: TwilioIntegrationAccountAuthenticationUpdate;
  /**
   * Dataflows to configure on the Twilio integration account, keyed by dataflow id.
   */
  "dataflows"?: TwilioIntegrationDataflowsRequest;
  /**
   * Human-readable name of the Twilio integration account.
   */
  "name"?: string;
  /**
   * Settings for updating the Twilio integration account. Only the fields provided are changed.
   */
  "settings"?: TwilioIntegrationAccountSettingsUpdate;
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
      type: "TwilioIntegrationAccountAuthenticationUpdate",
    },
    dataflows: {
      baseName: "dataflows",
      type: "TwilioIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "TwilioIntegrationAccountSettingsUpdate",
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
    return TwilioIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
