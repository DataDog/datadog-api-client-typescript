/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Relation entity reference.
*/
export class RelationEntity {
  /**
   * Entity kind.
  */
  "kind"?: string;
  /**
   * Entity name.
  */
  "name"?: string;
  /**
   * Entity namespace.
  */
  "namespace"?: string;

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
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return RelationEntity.attributeTypeMap;

  }

  public constructor() {











  }
}









