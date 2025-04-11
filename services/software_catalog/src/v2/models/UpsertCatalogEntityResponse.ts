import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityData } from "./EntityData";
import { EntityResponseMeta } from "./EntityResponseMeta";
import { UpsertCatalogEntityResponseIncludedItem } from "./UpsertCatalogEntityResponseIncludedItem";

/**
 * Upsert entity response.
 */
export class UpsertCatalogEntityResponse {
  /**
   * List of entity data.
   */
  "data"?: Array<EntityData>;
  /**
   * Upsert entity response included.
   */
  "included"?: Array<UpsertCatalogEntityResponseIncludedItem>;
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
      type: "Array<UpsertCatalogEntityResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "EntityResponseMeta",
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
    return UpsertCatalogEntityResponse.attributeTypeMap;
  }

  public constructor() {}
}
