/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationToEntity } from "./RelationToEntity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relation relationships.
 */
export class RelationRelationships {
  /**
   * Relation to entity.
   */
  "fromEntity"?: RelationToEntity;
  /**
   * Relation to entity.
   */
  "toEntity"?: RelationToEntity;

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
    fromEntity: {
      baseName: "fromEntity",
      type: "RelationToEntity",
    },
    toEntity: {
      baseName: "toEntity",
      type: "RelationToEntity",
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
    return RelationRelationships.attributeTypeMap;
  }

  public constructor() {}
}
