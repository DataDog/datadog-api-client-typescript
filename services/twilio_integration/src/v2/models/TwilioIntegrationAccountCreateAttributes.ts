import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioIntegrationAccountAuthenticationRequest } from "./TwilioIntegrationAccountAuthenticationRequest";
import { TwilioIntegrationAccountSettingsRequest } from "./TwilioIntegrationAccountSettingsRequest";
import { TwilioIntegrationDataflowsRequest } from "./TwilioIntegrationDataflowsRequest";

/**
 * Writable attributes used to create a Twilio integration account.
 */
export class TwilioIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the Twilio integration account. Exactly one method is set.
   */
  "authentication": TwilioIntegrationAccountAuthenticationRequest;
  /**
   * Data Datadog collects from Twilio, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to start or stop it. Defaults listed on each dataflow apply when the account is created; on update, omitted fields keep their current values. Where a dataflow depends on a Twilio feature being enabled, that prerequisite is noted on the dataflow; a dataflow enabled without it is stored but collects no data.
   */
  "dataflows"?: TwilioIntegrationDataflowsRequest;
  /**
   * Human-readable name of the Twilio integration account.
   */
  "name": string;
  /**
   * Settings for creating the Twilio integration account.
   */
  "settings": TwilioIntegrationAccountSettingsRequest;
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
      type: "TwilioIntegrationAccountAuthenticationRequest",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "TwilioIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "TwilioIntegrationAccountSettingsRequest",
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
    return TwilioIntegrationAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
