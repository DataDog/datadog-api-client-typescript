import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetRestrictionResponseAttributes } from "./DatasetRestrictionResponseAttributes";
import { DatasetRestrictionsType } from "./DatasetRestrictionsType";

/**
 * A single dataset restriction configuration for one product type.
 */
export class DatasetRestrictionResponseData {
  /**
   * The current configuration of a dataset restriction, including restriction mode,
   * ownership mode, and exempt principals.
   */
  "attributes": DatasetRestrictionResponseAttributes;
  /**
   * The Datadog product type this restriction applies to (for example, `rum`, `apm`, or `logs`).
   */
  "id": string;
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
      type: "DatasetRestrictionResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return DatasetRestrictionResponseData.attributeTypeMap;
  }

  public constructor() {}
}
