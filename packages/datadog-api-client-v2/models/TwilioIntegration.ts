/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TwilioIntegrationType } from "./TwilioIntegrationType";
import { TwilioInterface } from "./TwilioInterface";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Twilio integration configuration.
 */
export class TwilioIntegration {
  /**
   * Twilio interface (source-type) configuration.
   */
  "_interface": TwilioInterface;
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
      type: "TwilioInterface",
      required: true,
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
    return TwilioIntegration.attributeTypeMap;
  }

  public constructor() {}
}
