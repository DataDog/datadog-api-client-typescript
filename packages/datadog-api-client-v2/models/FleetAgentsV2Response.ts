/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetAgentsV2ResponseMeta } from "./FleetAgentsV2ResponseMeta";
import { FleetAgentV2 } from "./FleetAgentV2";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a paginated list of Datadog Agents.
 */
export class FleetAgentsV2Response {
  /**
   * Array of agents matching the query criteria.
   */
  "data": Array<FleetAgentV2>;
  /**
   * Metadata for the v2 list of agents, including pagination information.
   */
  "meta"?: FleetAgentsV2ResponseMeta;

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
      type: "Array<FleetAgentV2>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FleetAgentsV2ResponseMeta",
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
    return FleetAgentsV2Response.attributeTypeMap;
  }

  public constructor() {}
}
