import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentHostsPage } from "./FleetDeploymentHostsPage";

/**
 * Metadata for a single deployment response, including pagination information for hosts.
 */
export class FleetDeploymentResponseMeta {
  /**
   * Pagination details for the list of hosts in a deployment.
   */
  "hosts"?: FleetDeploymentHostsPage;
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
    hosts: {
      baseName: "hosts",
      type: "FleetDeploymentHostsPage",
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
    return FleetDeploymentResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
