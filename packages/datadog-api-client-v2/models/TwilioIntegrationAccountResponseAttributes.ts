/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TwilioIntegrationAccountAuthenticationResponse } from "./TwilioIntegrationAccountAuthenticationResponse";
import { TwilioIntegrationAccountSettingsResponse } from "./TwilioIntegrationAccountSettingsResponse";
import { TwilioIntegrationDataflowsResponse } from "./TwilioIntegrationDataflowsResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Twilio integration account returned in responses.
 */
export class TwilioIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the Twilio integration account.
   */
  "authentication"?: TwilioIntegrationAccountAuthenticationResponse;
  /**
   * Dataflows configured on the Twilio integration account, keyed by dataflow id.
   */
  "dataflows"?: TwilioIntegrationDataflowsResponse;
  /**
   * Human-readable name of the Twilio integration account.
   */
  "name": string;
  /**
   * Settings configured on the Twilio integration account.
   */
  "settings": TwilioIntegrationAccountSettingsResponse;

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
      type: "TwilioIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "TwilioIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "TwilioIntegrationAccountSettingsResponse",
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
    return TwilioIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
