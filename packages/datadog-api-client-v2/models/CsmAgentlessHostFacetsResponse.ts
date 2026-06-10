/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmAgentlessHostFacetData } from "./CsmAgentlessHostFacetData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response returned when listing facets for agentless hosts.
 */
export class CsmAgentlessHostFacetsResponse {
  /**
   * The list of available facets for agentless hosts.
   */
  "data": Array<CsmAgentlessHostFacetData>;

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
      type: "Array<CsmAgentlessHostFacetData>",
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
    return CsmAgentlessHostFacetsResponse.attributeTypeMap;
  }

  public constructor() {}
}
