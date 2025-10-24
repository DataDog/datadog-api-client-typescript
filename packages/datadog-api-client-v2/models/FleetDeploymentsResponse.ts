/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeployment } from "./FleetDeployment";
import { FleetDeploymentsResponseMeta } from "./FleetDeploymentsResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
