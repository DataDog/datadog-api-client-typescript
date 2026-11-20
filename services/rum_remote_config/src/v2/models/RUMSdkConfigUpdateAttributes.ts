import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMSdkConfigRUMUpdateAttributes } from "./RUMSdkConfigRUMUpdateAttributes";

/**
 * Attributes of the RUM SDK configuration to update.
 */
export class RUMSdkConfigUpdateAttributes {
  /**
   * The RUM SDK settings to apply when updating a configuration.
   */
  "rum": RUMSdkConfigRUMUpdateAttributes;
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
    rum: {
      baseName: "rum",
      type: "RUMSdkConfigRUMUpdateAttributes",
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
    return RUMSdkConfigUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
