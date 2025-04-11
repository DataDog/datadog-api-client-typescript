import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationKeysType } from "./ApplicationKeysType";
import { ApplicationKeyUpdateAttributes } from "./ApplicationKeyUpdateAttributes";

/**
 * Object used to update an application key.
 */
export class ApplicationKeyUpdateData {
  /**
   * Attributes used to update an application Key.
   */
  "attributes": ApplicationKeyUpdateAttributes;
  /**
   * ID of the application key.
   */
  "id": string;
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
      type: "ApplicationKeyUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return ApplicationKeyUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
