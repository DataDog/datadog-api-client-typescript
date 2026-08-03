/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentsV2ResponseMeta } from "./FleetDeploymentsV2ResponseMeta";
import { FleetDeploymentV2 } from "./FleetDeploymentV2";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a paginated list of deployments.
 */
export class FleetDeploymentsV2Response {
  /**
   * Array of deployments matching the query criteria.
   */
  "data": Array<FleetDeploymentV2>;
  /**
   * Metadata for the v2 list of deployments, including pagination information.
   */
  "meta"?: FleetDeploymentsV2ResponseMeta;

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
      type: "Array<FleetDeploymentV2>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FleetDeploymentsV2ResponseMeta",
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
    return FleetDeploymentsV2Response.attributeTypeMap;
  }

  public constructor() {}
}
