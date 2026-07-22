import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSdkConfigRumUpdateAttributes } from "./RumSdkConfigRumUpdateAttributes";

/**
 * Attributes of the RUM SDK configuration to update.
 */
export class RumSdkConfigUpdateAttributes {
  /**
   * The RUM SDK settings to apply when updating a configuration.
   */
  "rum": RumSdkConfigRumUpdateAttributes;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    rum: {
      baseName: "rum",
      type: "RumSdkConfigRumUpdateAttributes",
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
    return RumSdkConfigUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
