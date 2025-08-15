/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationAttributes } from "./RelationAttributes";
import { RelationMeta } from "./RelationMeta";
import { RelationRelationships } from "./RelationRelationships";
import { RelationResponseType } from "./RelationResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relation response data.
 */
export class RelationResponse {
  /**
   * Relation attributes.
   */
  "attributes"?: RelationAttributes;
  /**
   * Relation ID.
   */
  "id"?: string;
  /**
   * Relation metadata.
   */
  "meta"?: RelationMeta;
  /**
   * Relation relationships.
   */
  "relationships"?: RelationRelationships;
  /**
   * Relation subtype.
   */
  "subtype"?: string;
  /**
   * Relation type.
   */
  "type"?: RelationResponseType;

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
      type: "RelationAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "RelationMeta",
    },
    relationships: {
      baseName: "relationships",
      type: "RelationRelationships",
    },
    subtype: {
      baseName: "subtype",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RelationResponseType",
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
    return RelationResponse.attributeTypeMap;
  }

  public constructor() {}
}
