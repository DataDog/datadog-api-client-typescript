/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of Entity V3 Datastore Spec object.
*/
export class EntityV3DatastoreSpec {
  /**
   * A list of components the datastore is a part of
  */
  "componentOf"?: Array<string>;
  /**
   * The lifecycle state of the datastore.
  */
  "lifecycle"?: string;
  /**
   * The importance of the datastore.
  */
  "tier"?: string;
  /**
   * The type of datastore.
  */
  "type"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "componentOf": {
      "baseName": "componentOf",
      "type": "Array<string>",
    },
    "lifecycle": {
      "baseName": "lifecycle",
      "type": "string",
    },
    "tier": {
      "baseName": "tier",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "string",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return EntityV3DatastoreSpec.attributeTypeMap;

  }

  public constructor() {











  }
}









