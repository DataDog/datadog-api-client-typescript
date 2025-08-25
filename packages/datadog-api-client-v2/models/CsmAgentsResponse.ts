/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmAgentData } from "./CsmAgentData";
import { CSMAgentsMetadata } from "./CSMAgentsMetadata";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Response object that includes a list of CSM Agents.
*/
export class CsmAgentsResponse {
  /**
   * A list of Agents.
  */
  "data"?: Array<CsmAgentData>;
  /**
   * Metadata related to the paginated response.
  */
  "meta"?: CSMAgentsMetadata;

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
    "data": {
      "baseName": "data",
      "type": "Array<CsmAgentData>",
    },
    "meta": {
      "baseName": "meta",
      "type": "CSMAgentsMetadata",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return CsmAgentsResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









