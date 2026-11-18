import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAccessScopesPage } from "./FleetAccessScopesPage";

/**
 * Metadata for the list of fleet access scopes.
 */
export class FleetAccessScopesResponseMeta {
  /**
   * Count of scopes returned by the list operation.
   */
  "page"?: FleetAccessScopesPage;
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
    page: {
      baseName: "page",
      type: "FleetAccessScopesPage",
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
    return FleetAccessScopesResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
