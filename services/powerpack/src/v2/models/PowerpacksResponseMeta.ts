import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PowerpacksResponseMetaPagination } from "./PowerpacksResponseMetaPagination";

/**
 * Powerpack response metadata.
 */
export class PowerpacksResponseMeta {
  /**
   * Powerpack response pagination metadata.
   */
  "pagination"?: PowerpacksResponseMetaPagination;
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
    pagination: {
      baseName: "pagination",
      type: "PowerpacksResponseMetaPagination",
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
    return PowerpacksResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
