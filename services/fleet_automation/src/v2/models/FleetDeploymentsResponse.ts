import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeployment } from "./FleetDeployment";
import { FleetDeploymentsResponseMeta } from "./FleetDeploymentsResponseMeta";

/**
 * Response containing a paginated list of deployments.
 */
export class FleetDeploymentsResponse {
  /**
   * Array of deployments matching the query criteria.
   */
  "data": Array<FleetDeployment>;
  /**
   * Metadata for the list of deployments, including pagination information.
   */
  "meta"?: FleetDeploymentsResponseMeta;
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
      type: "Array<FleetDeployment>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FleetDeploymentsResponseMeta",
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
    return FleetDeploymentsResponse.attributeTypeMap;
  }

  public constructor() {}
}
