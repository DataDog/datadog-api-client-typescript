/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationKeyRelationships } from "./ApplicationKeyRelationships";
import { ApplicationKeysType } from "./ApplicationKeysType";
import { PartialApplicationKeyAttributes } from "./PartialApplicationKeyAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Partial Datadog application key.
*/
export class PartialApplicationKey {
  /**
   * Attributes of a partial application key.
  */
  "attributes"?: PartialApplicationKeyAttributes;
  /**
   * ID of the application key.
  */
  "id"?: string;
  /**
   * Resources related to the application key.
  */
  "relationships"?: ApplicationKeyRelationships;
  /**
   * Application Keys resource type.
  */
  "type"?: ApplicationKeysType;

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
      "type": "PartialApplicationKeyAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "relationships": {
      "baseName": "relationships",
      "type": "ApplicationKeyRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "ApplicationKeysType",
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




    return PartialApplicationKey.attributeTypeMap;

  }

  public constructor() {











  }
}









