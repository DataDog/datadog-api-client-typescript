import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomConnectionAttributesOnPremRunner } from "./CustomConnectionAttributesOnPremRunner";

/**
 * The custom connection attributes.
 */
export class CustomConnectionAttributes {
  /**
   * The name of the custom connection.
   */
  "name"?: string;
  /**
   * Information about the Private Action Runner used by the custom connection, if the custom connection is associated with a Private Action Runner.
   */
  "onPremRunner"?: CustomConnectionAttributesOnPremRunner;
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
    name: {
      baseName: "name",
      type: "string",
    },
    onPremRunner: {
      baseName: "onPremRunner",
      type: "CustomConnectionAttributesOnPremRunner",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomConnectionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
