import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAccessScope } from "./FleetAccessScope";
import { FleetAccessScopesResponseMeta } from "./FleetAccessScopesResponseMeta";

/**
 * Response containing all fleet access scopes in the organization.
 */
export class FleetAccessScopesResponse {
  /**
   * Access scopes in the organization.
   */
  "data": Array<FleetAccessScope>;
  /**
   * Metadata for the list of fleet access scopes.
   */
  "meta"?: FleetAccessScopesResponseMeta;
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
      type: "Array<FleetAccessScope>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FleetAccessScopesResponseMeta",
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
    return FleetAccessScopesResponse.attributeTypeMap;
  }

  public constructor() {}
}
