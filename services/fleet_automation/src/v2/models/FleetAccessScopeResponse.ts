import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAccessScope } from "./FleetAccessScope";

/**
 * Response containing one fleet access scope.
 */
export class FleetAccessScopeResponse {
  /**
   * A fleet access scope. Use `fleet-scope:<id>` as the restriction policy resource identifier.
   */
  "data": FleetAccessScope;
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
      type: "FleetAccessScope",
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
    return FleetAccessScopeResponse.attributeTypeMap;
  }

  public constructor() {}
}
