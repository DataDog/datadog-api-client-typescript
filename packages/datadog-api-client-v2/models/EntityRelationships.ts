/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityToIncidents } from "./EntityToIncidents";
import { EntityToOncalls } from "./EntityToOncalls";
import { EntityToRawSchema } from "./EntityToRawSchema";
import { EntityToRelatedEntities } from "./EntityToRelatedEntities";
import { EntityToSchema } from "./EntityToSchema";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Entity relationships.
*/
export class EntityRelationships {
  /**
   * Entity to incidents relationship.
  */
  "incidents"?: EntityToIncidents;
  /**
   * Entity to oncalls relationship.
  */
  "oncall"?: EntityToOncalls;
  /**
   * Entity to raw schema relationship.
  */
  "rawSchema"?: EntityToRawSchema;
  /**
   * Entity to related entities relationship.
  */
  "relatedEntities"?: EntityToRelatedEntities;
  /**
   * Entity to detail schema relationship.
  */
  "schema"?: EntityToSchema;

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
    "incidents": {
      "baseName": "incidents",
      "type": "EntityToIncidents",
    },
    "oncall": {
      "baseName": "oncall",
      "type": "EntityToOncalls",
    },
    "rawSchema": {
      "baseName": "rawSchema",
      "type": "EntityToRawSchema",
    },
    "relatedEntities": {
      "baseName": "relatedEntities",
      "type": "EntityToRelatedEntities",
    },
    "schema": {
      "baseName": "schema",
      "type": "EntityToSchema",
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




    return EntityRelationships.attributeTypeMap;

  }

  public constructor() {











  }
}









