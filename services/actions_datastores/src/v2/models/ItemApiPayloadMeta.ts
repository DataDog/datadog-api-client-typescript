import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ItemApiPayloadMetaPage } from "./ItemApiPayloadMetaPage";
import { ItemApiPayloadMetaSchema } from "./ItemApiPayloadMetaSchema";

/**
 * Additional metadata about a collection of datastore items, including pagination and schema information.
 */
export class ItemApiPayloadMeta {
  /**
   * Pagination information for a collection of datastore items.
   */
  "page"?: ItemApiPayloadMetaPage;
  /**
   * Schema information about the datastore, including its primary key and field definitions.
   */
  "schema"?: ItemApiPayloadMetaSchema;
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
    page: {
      baseName: "page",
      type: "ItemApiPayloadMetaPage",
    },
    schema: {
      baseName: "schema",
      type: "ItemApiPayloadMetaSchema",
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
    return ItemApiPayloadMeta.attributeTypeMap;
  }

  public constructor() {}
}
