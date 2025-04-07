import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityFilter } from "./SecurityFilter";
import { SecurityFilterMeta } from "./SecurityFilterMeta";

/**
 * Response object which includes a single security filter.
 */
export class SecurityFilterResponse {
  /**
   * The security filter's properties.
   */
  "data"?: SecurityFilter;
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
      type: "SecurityFilter",
    },
    meta: {
      baseName: "meta",
      type: "SecurityFilterMeta",
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
    return SecurityFilterResponse.attributeTypeMap;
  }

  public constructor() {}
}
