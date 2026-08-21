/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TwilioIntegrationAccountAuthenticationRequest } from "./TwilioIntegrationAccountAuthenticationRequest";
import { TwilioIntegrationAccountSettingsRequest } from "./TwilioIntegrationAccountSettingsRequest";
import { TwilioIntegrationDataflowsRequest } from "./TwilioIntegrationDataflowsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to create a Twilio integration account.
 */
export class TwilioIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the Twilio integration account. Exactly one method is set.
   */
  "authentication": TwilioIntegrationAccountAuthenticationRequest;
  /**
   * Dataflows to configure on the Twilio integration account, keyed by dataflow id.
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
