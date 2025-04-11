import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityFilterCreateAttributes } from "./SecurityFilterCreateAttributes";
import { SecurityFilterType } from "./SecurityFilterType";

/**
 * Object for a single security filter.
 */
export class SecurityFilterCreateData {
  /**
   * Object containing the attributes of the security filter to be created.
   */
  "attributes": SecurityFilterCreateAttributes;
  /**
   * The type of the resource. The value should always be `security_filters`.
   */
  "type": SecurityFilterType;
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
      type: "SecurityFilterCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityFilterType",
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
    return SecurityFilterCreateData.attributeTypeMap;
  }

  public constructor() {}
}
