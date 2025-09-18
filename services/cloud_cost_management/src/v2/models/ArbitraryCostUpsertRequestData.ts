import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArbitraryCostUpsertRequestDataAttributes } from "./ArbitraryCostUpsertRequestDataAttributes";
import { ArbitraryCostUpsertRequestDataType } from "./ArbitraryCostUpsertRequestDataType";

/**
 * The definition of `ArbitraryCostUpsertRequestData` object.
 */
export class ArbitraryCostUpsertRequestData {
  /**
   * The definition of `ArbitraryCostUpsertRequestDataAttributes` object.
   */
  "attributes"?: ArbitraryCostUpsertRequestDataAttributes;
  /**
   * The `ArbitraryCostUpsertRequestData` `id`.
   */
  "id"?: string;
  /**
   * Upsert arbitrary rule resource type.
   */
  "type": ArbitraryCostUpsertRequestDataType;
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
      type: "ArbitraryCostUpsertRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ArbitraryCostUpsertRequestDataType",
      required: true,
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
    return ArbitraryCostUpsertRequestData.attributeTypeMap;
  }

  public constructor() {}
}
