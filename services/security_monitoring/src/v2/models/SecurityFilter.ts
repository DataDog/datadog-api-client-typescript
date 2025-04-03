import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityFilterAttributes } from "./SecurityFilterAttributes";
import { SecurityFilterType } from "./SecurityFilterType";

/**
 * The security filter's properties.
 */
export class SecurityFilter {
  /**
   * The object describing a security filter.
   */
  "attributes"?: SecurityFilterAttributes;
  /**
   * The ID of the security filter.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `security_filters`.
   */
  "type"?: SecurityFilterType;
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
      type: "SecurityFilterAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityFilterType",
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
    return SecurityFilter.attributeTypeMap;
  }

  public constructor() {}
}
