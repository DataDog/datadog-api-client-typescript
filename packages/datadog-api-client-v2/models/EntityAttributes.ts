/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Entity attributes.
*/
export class EntityAttributes {
  /**
   * The API version.
  */
  "apiVersion"?: string;
  /**
   * The description.
  */
  "description"?: string;
  /**
   * The display name.
  */
  "displayName"?: string;
  /**
   * The kind.
  */
  "kind"?: string;
  /**
   * The name.
  */
  "name"?: string;
  /**
   * The namespace.
  */
  "namespace"?: string;
  /**
   * The owner.
  */
  "owner"?: string;
  /**
   * The tags.
  */
  "tags"?: Array<string>;

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
    "apiVersion": {
      "baseName": "apiVersion",
      "type": "string",
    },
    "description": {
      "baseName": "description",
      "type": "string",
    },
    "displayName": {
      "baseName": "displayName",
      "type": "string",
    },
    "kind": {
      "baseName": "kind",
      "type": "string",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "namespace": {
      "baseName": "namespace",
      "type": "string",
    },
    "owner": {
      "baseName": "owner",
      "type": "string",
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
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




    return EntityAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









