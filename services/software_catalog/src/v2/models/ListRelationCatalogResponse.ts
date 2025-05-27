import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityData } from "./EntityData";
import { ListRelationCatalogResponseLinks } from "./ListRelationCatalogResponseLinks";
import { RelationResponse } from "./RelationResponse";
import { RelationResponseMeta } from "./RelationResponseMeta";

/**
 * List entity relation response.
 */
export class ListRelationCatalogResponse {
  /**
   * Array of relation responses
   */
  "data"?: Array<RelationResponse>;
  /**
   * List relation response included entities.
   */
  "included"?: Array<EntityData>;
  /**
   * List relation response links.
   */
  "links"?: ListRelationCatalogResponseLinks;
  /**
   * Relation response metadata.
   */
  "meta"?: RelationResponseMeta;
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
      type: "Array<RelationResponse>",
    },
    included: {
      baseName: "included",
      type: "Array<EntityData>",
    },
    links: {
      baseName: "links",
      type: "ListRelationCatalogResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "RelationResponseMeta",
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
    return ListRelationCatalogResponse.attributeTypeMap;
  }

  public constructor() {}
}
