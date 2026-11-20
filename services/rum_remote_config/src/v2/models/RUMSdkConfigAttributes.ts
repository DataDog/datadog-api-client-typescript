import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMSdkConfigRUMAttributes } from "./RUMSdkConfigRUMAttributes";

/**
 * Attributes of the RUM SDK configuration.
 */
export class RUMSdkConfigAttributes {
  /**
   * The RUM SDK settings for a configuration.
   */
  "rum": RUMSdkConfigRUMAttributes;
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
      type: "RUMSdkConfigRUMAttributes",
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
    return RUMSdkConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
