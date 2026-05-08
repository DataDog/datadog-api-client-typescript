import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetRestrictionsType } from "./DatasetRestrictionsType";
import { DatasetRestrictionUpdateRequestAttributes } from "./DatasetRestrictionUpdateRequestAttributes";

/**
 * Data object for a dataset restriction update.
 */
export class DatasetRestrictionUpdateRequestData {
  /**
   * Editable attributes of a dataset restriction. Only `restriction_mode` is required;
   * omitted optional fields retain their current values.
   */
  "attributes": DatasetRestrictionUpdateRequestAttributes;
  /**
   * JSON:API resource type for dataset restrictions.
   */
  "type": DatasetRestrictionsType;
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
      type: "DatasetRestrictionUpdateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DatasetRestrictionsType",
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
    return DatasetRestrictionUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
