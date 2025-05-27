import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationEntity } from "./RelationEntity";
import { RelationType } from "./RelationType";

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
    from: {
      baseName: "from",
      type: "RelationEntity",
    },
    to: {
      baseName: "to",
      type: "RelationEntity",
    },
    type: {
      baseName: "type",
      type: "RelationType",
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
    return RelationAttributes.attributeTypeMap;
  }

  public constructor() {}
}
