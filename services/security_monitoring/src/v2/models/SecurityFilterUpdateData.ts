import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityFilterType } from "./SecurityFilterType";
import { SecurityFilterUpdateAttributes } from "./SecurityFilterUpdateAttributes";

/**
 * The new security filter properties.
 */
export class SecurityFilterUpdateData {
  /**
   * The security filters properties to be updated.
   */
  "attributes": SecurityFilterUpdateAttributes;
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
      type: "SecurityFilterUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityFilterType",
      required: true,
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
    return SecurityFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
