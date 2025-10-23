import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentsPage } from "./FleetDeploymentsPage";

/**
 * Metadata for the list of deployments, including pagination information.
 */
export class FleetDeploymentsResponseMeta {
  /**
   * Pagination details for the list of deployments.
   */
  "page"?: FleetDeploymentsPage;
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
      type: "FleetDeploymentsPage",
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
    return FleetDeploymentsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
