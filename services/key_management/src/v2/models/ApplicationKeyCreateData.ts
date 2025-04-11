import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationKeyCreateAttributes } from "./ApplicationKeyCreateAttributes";
import { ApplicationKeysType } from "./ApplicationKeysType";

/**
 * Object used to create an application key.
 */
export class ApplicationKeyCreateData {
  /**
   * Attributes used to create an application Key.
   */
  "attributes": ApplicationKeyCreateAttributes;
  /**
   * Application Keys resource type.
   */
  "type": ApplicationKeysType;
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
    attributes: {
      baseName: "attributes",
      type: "ApplicationKeyCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ApplicationKeysType",
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
    return ApplicationKeyCreateData.attributeTypeMap;
  }

  public constructor() {}
}
