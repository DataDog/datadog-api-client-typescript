import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Environment } from "./Environment";
import { EnvironmentsPaginationMeta } from "./EnvironmentsPaginationMeta";

/**
 * Response containing a list of environments.
 */
export class ListEnvironmentsResponse {
  /**
   * List of environments.
   */
  "data": Array<Environment>;
  /**
   * Pagination metadata for environments.
   */
  "meta"?: EnvironmentsPaginationMeta;
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
      type: "Array<Environment>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "EnvironmentsPaginationMeta",
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
    return ListEnvironmentsResponse.attributeTypeMap;
  }

  public constructor() {}
}
