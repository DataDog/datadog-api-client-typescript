import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioAuthentication } from "./TwilioAuthentication";
import { TwilioDataflow } from "./TwilioDataflow";
import { TwilioInterfaceType } from "./TwilioInterfaceType";
import { TwilioSettings } from "./TwilioSettings";

/**
 * Twilio interface (source-type) configuration.
 */
export class TwilioInterface {
  /**
   * Authentication methods supported by the Twilio interface. Exactly one is set, selected by its `type`.
   */
  "authentication": TwilioAuthentication;
  /**
   * Dataflows for the Twilio interface.
   */
  "dataflows"?: Array<TwilioDataflow>;
  /**
   * Twilio interface settings.
   */
  "settings"?: TwilioSettings;
  /**
   * Interface discriminator for Twilio.
   */
  "type": TwilioInterfaceType;
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
    settings: {
      baseName: "settings",
      type: "TwilioSettings",
    },
    type: {
      baseName: "type",
      type: "TwilioInterfaceType",
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
    return TwilioInterface.attributeTypeMap;
  }

  public constructor() {}
}
