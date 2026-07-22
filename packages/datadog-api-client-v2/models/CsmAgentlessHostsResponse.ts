/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmAgentlessHostData } from "./CsmAgentlessHostData";
import { CsmSettingsMeta } from "./CsmSettingsMeta";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The response returned when listing agentless hosts.
*/
export class CsmAgentlessHostsResponse {
  /**
   * The list of agentless hosts for the current page.
  */
  "data": Array<CsmAgentlessHostData>;
  /**
   * Pagination metadata for a CSM settings list response.
  */
  "meta": CsmSettingsMeta;

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
    "data": {
      "baseName": "data",
      "type": "Array<CsmAgentlessHostData>",
      "required": true,
    },
    "meta": {
      "baseName": "meta",
      "type": "CsmSettingsMeta",
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




    return CsmAgentlessHostsResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









