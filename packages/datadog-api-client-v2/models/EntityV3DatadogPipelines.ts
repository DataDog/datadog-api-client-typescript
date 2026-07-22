/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * CI Pipelines association.
*/
export class EntityV3DatadogPipelines {
  /**
   * A list of CI Fingerprints that associate CI Pipelines with the entity.
  */
  "fingerprints"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "fingerprints": {
      "baseName": "fingerprints",
      "type": "Array<string>",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return EntityV3DatadogPipelines.attributeTypeMap;

  }

  public constructor() {











  }
}









