import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityFilter } from "./SecurityFilter";
import { SecurityFilterMeta } from "./SecurityFilterMeta";

/**
 * All the available security filters objects.
 */
export class SecurityFiltersResponse {
  /**
   * A list of security filters objects.
   */
  "data"?: Array<SecurityFilter>;
  /**
   * Optional metadata associated to the response.
   */
  "meta"?: SecurityFilterMeta;
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
    data: {
      baseName: "data",
      type: "Array<SecurityFilter>",
    },
    meta: {
      baseName: "meta",
      type: "SecurityFilterMeta",
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
    return SecurityFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
