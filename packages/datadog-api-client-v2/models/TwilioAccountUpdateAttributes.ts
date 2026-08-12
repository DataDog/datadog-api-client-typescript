/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TwilioAuthentication } from "./TwilioAuthentication";
import { TwilioDataflow } from "./TwilioDataflow";
import { TwilioSettingsUpdate } from "./TwilioSettingsUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Updatable attributes of a Twilio integration account. Every field is optional; only the fields provided are changed.
 */
export class TwilioAccountUpdateAttributes {
  /**
   * Authentication methods supported by the Twilio interface. Exactly one is set, selected by its `type`.
   */
  "authentication"?: TwilioAuthentication;
  /**
   * Dataflows for the Twilio interface.
   */
  "dataflows"?: Array<TwilioDataflow>;
  /**
   * Human-readable name of the account.
   */
  "name"?: string;
  /**
   * Partial Twilio interface settings for updates.
   */
  "settings"?: TwilioSettingsUpdate;

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
    },
    dataflows: {
      baseName: "dataflows",
      type: "Array<TwilioDataflow>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "TwilioSettingsUpdate",
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
    return TwilioAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
