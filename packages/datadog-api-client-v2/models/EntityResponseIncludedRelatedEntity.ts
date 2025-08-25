/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityResponseIncludedRelatedEntityAttributes } from "./EntityResponseIncludedRelatedEntityAttributes";
import { EntityResponseIncludedRelatedEntityMeta } from "./EntityResponseIncludedRelatedEntityMeta";
import { EntityResponseIncludedRelatedEntityType } from "./EntityResponseIncludedRelatedEntityType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Included related entity.
 */
export class EntityResponseIncludedRelatedEntity {
  /**
   * Related entity attributes.
   */
  "attributes"?: EntityResponseIncludedRelatedEntityAttributes;
  /**
   * Entity UUID.
   */
  "id"?: string;
  /**
   * Included related entity meta.
   */
  "meta"?: EntityResponseIncludedRelatedEntityMeta;
  /**
   * Related entity.
   */
  "type"?: EntityResponseIncludedRelatedEntityType;

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
      type: "EntityResponseIncludedRelatedEntityAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "EntityResponseIncludedRelatedEntityMeta",
    },
    type: {
      baseName: "type",
      type: "EntityResponseIncludedRelatedEntityType",
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
    return EntityResponseIncludedRelatedEntity.attributeTypeMap;
  }

  public constructor() {}
}
