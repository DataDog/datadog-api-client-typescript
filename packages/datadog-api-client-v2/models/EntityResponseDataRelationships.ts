/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityResponseDataRelationshipsIncidents } from "./EntityResponseDataRelationshipsIncidents";
import { EntityResponseDataRelationshipsOncalls } from "./EntityResponseDataRelationshipsOncalls";
import { EntityResponseDataRelationshipsRawSchema } from "./EntityResponseDataRelationshipsRawSchema";
import { EntityResponseDataRelationshipsRelatedEntities } from "./EntityResponseDataRelationshipsRelatedEntities";
import { EntityResponseDataRelationshipsSchema } from "./EntityResponseDataRelationshipsSchema";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Entity relationships including incidents, oncalls, schemas, and related entities.
 */
export class EntityResponseDataRelationships {
  /**
   * Incidents relationship containing a list of incident resources associated with this entity.
   */
  "incidents"?: EntityResponseDataRelationshipsIncidents;
  /**
   * Oncalls relationship containing a list of oncall resources associated with this entity.
   */
  "oncalls"?: EntityResponseDataRelationshipsOncalls;
  /**
   * Raw schema relationship linking an entity to its raw schema resource.
   */
  "rawSchema"?: EntityResponseDataRelationshipsRawSchema;
  /**
   * Related entities relationship containing a list of entity references related to this entity.
   */
  "relatedEntities"?: EntityResponseDataRelationshipsRelatedEntities;
  /**
   * Schema relationship linking an entity to its associated schema resource.
   */
  "schema"?: EntityResponseDataRelationshipsSchema;

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
    incidents: {
      baseName: "incidents",
      type: "EntityResponseDataRelationshipsIncidents",
    },
    oncalls: {
      baseName: "oncalls",
      type: "EntityResponseDataRelationshipsOncalls",
    },
    rawSchema: {
      baseName: "rawSchema",
      type: "EntityResponseDataRelationshipsRawSchema",
    },
    relatedEntities: {
      baseName: "relatedEntities",
      type: "EntityResponseDataRelationshipsRelatedEntities",
    },
    schema: {
      baseName: "schema",
      type: "EntityResponseDataRelationshipsSchema",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityResponseDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
