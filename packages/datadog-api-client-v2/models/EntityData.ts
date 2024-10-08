/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityAttributes } from "./EntityAttributes";
import { EntityMeta } from "./EntityMeta";
import { EntityRelationships } from "./EntityRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Entity data.
 */
export class EntityData {
  /**
   * Entity attributes.
   */
  "attributes"?: EntityAttributes;
  /**
   * Entity ID.
   */
  "id"?: string;
  /**
   * Entity metadata.
   */
  "meta"?: EntityMeta;
  /**
   * Entity relationships.
   */
  "relationships"?: EntityRelationships;
  /**
   * Entity.
   */
  "type"?: string;

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
    attributes: {
      baseName: "attributes",
      type: "EntityAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "EntityMeta",
    },
    relationships: {
      baseName: "relationships",
      type: "EntityRelationships",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityData.attributeTypeMap;
  }

  public constructor() {}
}
