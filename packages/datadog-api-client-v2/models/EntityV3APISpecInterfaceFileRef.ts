/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of `EntityV3APISpecInterfaceFileRef` object.
*/
export class EntityV3APISpecInterfaceFileRef {
  /**
   * The reference to the API definition file.
  */
  "fileRef"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "fileRef": {
      "baseName": "fileRef",
      "type": "string",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return EntityV3APISpecInterfaceFileRef.attributeTypeMap;

  }

  public constructor() {











  }
}









