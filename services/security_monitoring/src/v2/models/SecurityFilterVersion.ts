import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityFilterVersionAttributes } from "./SecurityFilterVersionAttributes";
import { SecurityFilterVersionType } from "./SecurityFilterVersionType";

/**
 * A snapshot of all security filters at a specific configuration version.
 */
export class SecurityFilterVersion {
  /**
   * The attributes describing a single security filter configuration version.
   */
  "attributes": SecurityFilterVersionAttributes;
  /**
   * The identifier of the configuration version.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `security_filters_configuration`.
   */
  "type": SecurityFilterVersionType;
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
      type: "SecurityFilterVersionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityFilterVersionType",
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
    return SecurityFilterVersion.attributeTypeMap;
  }

  public constructor() {}
}
