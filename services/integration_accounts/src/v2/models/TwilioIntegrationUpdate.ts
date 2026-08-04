import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioIntegrationType } from "./TwilioIntegrationType";
import { TwilioInterfaceUpdate } from "./TwilioInterfaceUpdate";

/**
 * Partial Twilio integration configuration for updates.
 */
export class TwilioIntegrationUpdate {
  /**
   * Partial Twilio interface (source-type) configuration for updates.
   */
  "_interface"?: TwilioInterfaceUpdate;
  /**
   * Integration discriminator for Twilio.
   */
  "type": TwilioIntegrationType;
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
      type: "TwilioInterfaceUpdate",
    },
    type: {
      baseName: "type",
      type: "TwilioIntegrationType",
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
    return TwilioIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
