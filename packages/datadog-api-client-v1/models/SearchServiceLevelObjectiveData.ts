/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SearchServiceLevelObjectiveAttributes } from "./SearchServiceLevelObjectiveAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A service level objective ID and attributes.
*/
export class SearchServiceLevelObjectiveData {
  /**
   * A service level objective object includes a service level indicator, thresholds
   * for one or more timeframes, and metadata (`name`, `description`, and `tags`).
  */
  "attributes"?: SearchServiceLevelObjectiveAttributes;
  /**
   * A unique identifier for the service level objective object.
   * 
   * Always included in service level objective responses.
  */
  "id"?: string;
  /**
   * The type of the object, must be `slo`.
  */
  "type"?: string;

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
    "attributes": {
      "baseName": "attributes",
      "type": "SearchServiceLevelObjectiveAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "string",
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




    return SearchServiceLevelObjectiveData.attributeTypeMap;

  }

  public constructor() {











  }
}









