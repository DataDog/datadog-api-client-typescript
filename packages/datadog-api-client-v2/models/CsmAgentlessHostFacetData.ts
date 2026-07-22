/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmAgentlessHostFacetAttributes } from "./CsmAgentlessHostFacetAttributes";
import { CsmAgentlessHostFacetType } from "./CsmAgentlessHostFacetType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A single agentless host facet resource.
*/
export class CsmAgentlessHostFacetData {
  /**
   * Attributes of an agentless host facet.
  */
  "attributes": CsmAgentlessHostFacetAttributes;
  /**
   * The identifier of the facet, corresponding to the field path.
  */
  "id": string;
  /**
   * The JSON:API type for agentless host facet resources. The value should always be `agentless_host_facet`.
  */
  "type": CsmAgentlessHostFacetType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "attributes": {
      "baseName": "attributes",
      "type": "CsmAgentlessHostFacetAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "CsmAgentlessHostFacetType",
      "required": true,
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




    return CsmAgentlessHostFacetData.attributeTypeMap;

  }

  public constructor() {











  }
}









