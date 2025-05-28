/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomCostListResponseMeta } from "./CustomCostListResponseMeta";
import { CustomCostsFileMetadataHighLevel } from "./CustomCostsFileMetadataHighLevel";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Response for List Custom Costs files.
*/
export class CustomCostsFileListResponse {
  /**
   * List of Custom Costs files.
  */
  "data"?: Array<CustomCostsFileMetadataHighLevel>;
  /**
   * Meta for the response from the List Custom Costs endpoints.
  */
  "meta"?: CustomCostListResponseMeta;

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
      "type": "Array<CustomCostsFileMetadataHighLevel>",
    },
    "meta": {
      "baseName": "meta",
      "type": "CustomCostListResponseMeta",
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




    return CustomCostsFileListResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









