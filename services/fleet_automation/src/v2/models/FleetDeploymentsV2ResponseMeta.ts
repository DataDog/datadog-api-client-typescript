import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentsV2Page } from "./FleetDeploymentsV2Page";

/**
 * Metadata for the v2 list of deployments, including pagination information.
 */
export class FleetDeploymentsV2ResponseMeta {
  /**
   * Pagination details for the v2 list of deployments.
   */
  "page"?: FleetDeploymentsV2Page;
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
      type: "FleetDeploymentsV2Page",
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
    return FleetDeploymentsV2ResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
