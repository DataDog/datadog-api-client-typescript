import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipObjectOutputData } from "./RelationshipObjectOutputData";
import { WidgetLinks } from "./WidgetLinks";

/**
 * A JSON:API "relationship object".
 * See: https://jsonapi.org/format/#document-resource-object-relationships
 *
 * (When including relationships in models, you probably want Relationship, not this.)
 */
export class WidgetRelationshipObjectInput {
  "data"?: RelationshipObjectOutputData;
  /**
   * A JSON:API "links" member
   * See: https://jsonapi.org/format/#document-links
   */
  "links"?: WidgetLinks;
  "meta"?: { [key: string]: any };
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
    data: {
      baseName: "data",
      type: "RelationshipObjectOutputData",
    },
    links: {
      baseName: "links",
      type: "WidgetLinks",
    },
    meta: {
      baseName: "meta",
      type: "{ [key: string]: any; }",
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
    return WidgetRelationshipObjectInput.attributeTypeMap;
  }

  public constructor() {}
}
