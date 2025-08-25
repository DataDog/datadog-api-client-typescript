/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEventAttributesChangedResourceType } from "./ChangeEventAttributesChangedResourceType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A uniquely identified resource.
*/
export class ChangeEventAttributesChangedResource {
  /**
   * The name of the changed resource.
  */
  "name"?: string;
  /**
   * The type of the changed resource.
  */
  "type"?: ChangeEventAttributesChangedResourceType;

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
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "ChangeEventAttributesChangedResourceType",
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




    return ChangeEventAttributesChangedResource.attributeTypeMap;

  }

  public constructor() {











  }
}









