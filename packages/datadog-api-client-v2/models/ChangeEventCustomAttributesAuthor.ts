/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEventCustomAttributesAuthorType } from "./ChangeEventCustomAttributesAuthorType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The entity that made the change. Optional, if provided it must include `type` and `name`.
*/
export class ChangeEventCustomAttributesAuthor {
  /**
   * The name of the user or system that made the change. Limited to 128 characters.
  */
  "name": string;
  /**
   * Author's type.
  */
  "type": ChangeEventCustomAttributesAuthorType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "ChangeEventCustomAttributesAuthorType",
      "required": true,
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ChangeEventCustomAttributesAuthor.attributeTypeMap;

  }

  public constructor() {











  }
}









