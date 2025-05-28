/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationEntity } from "./RelationEntity";
import { RelationType } from "./RelationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Relation attributes.
*/
export class RelationAttributes {
  /**
   * Relation entity reference.
  */
  "from"?: RelationEntity;
  /**
   * Relation entity reference.
  */
  "to"?: RelationEntity;
  /**
   * Supported relation types.
  */
  "type"?: RelationType;

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
    "from": {
      "baseName": "from",
      "type": "RelationEntity",
    },
    "to": {
      "baseName": "to",
      "type": "RelationEntity",
    },
    "type": {
      "baseName": "type",
      "type": "RelationType",
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




    return RelationAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









