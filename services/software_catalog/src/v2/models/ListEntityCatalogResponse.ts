import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityData } from "./EntityData";
import { EntityResponseMeta } from "./EntityResponseMeta";
import { ListEntityCatalogResponseIncludedItem } from "./ListEntityCatalogResponseIncludedItem";
import { ListEntityCatalogResponseLinks } from "./ListEntityCatalogResponseLinks";

/**
 * List entity response.
 */
export class ListEntityCatalogResponse {
  /**
   * List of entity data.
   */
  "data"?: Array<EntityData>;
  /**
   * List entity response included.
   */
  "included"?: Array<ListEntityCatalogResponseIncludedItem>;
  /**
   * List entity response links.
   */
  "links"?: ListEntityCatalogResponseLinks;
  /**
   * Entity metadata.
   */
  "meta"?: EntityResponseMeta;
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
      type: "Array<EntityData>",
    },
    included: {
      baseName: "included",
      type: "Array<ListEntityCatalogResponseIncludedItem>",
    },
    links: {
      baseName: "links",
      type: "ListEntityCatalogResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "EntityResponseMeta",
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
    return ListEntityCatalogResponse.attributeTypeMap;
  }

  public constructor() {}
}
