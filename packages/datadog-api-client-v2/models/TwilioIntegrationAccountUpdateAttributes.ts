/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TwilioInterfaceUpdate } from "./TwilioInterfaceUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Updatable attributes of a Twilio integration account. Every field is optional; only the fields provided are changed.
 */
export class TwilioIntegrationAccountUpdateAttributes {
  /**
   * Partial Twilio interface (source-type) configuration for updates.
   */
  "_interface"?: TwilioInterfaceUpdate;
  /**
   * Human-readable name of the account.
   */
  "name"?: string;

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
    name: {
      baseName: "name",
      type: "string",
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
