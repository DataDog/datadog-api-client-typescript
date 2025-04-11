import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ActiveBillingDimensionsAttributes } from "./ActiveBillingDimensionsAttributes";
import { ActiveBillingDimensionsType } from "./ActiveBillingDimensionsType";

/**
 * Active billing dimensions data.
 */
export class ActiveBillingDimensionsBody {
  /**
   * List of active billing dimensions.
   */
  "attributes"?: ActiveBillingDimensionsAttributes;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  /**
   * Type of active billing dimensions data.
   */
  "type"?: ActiveBillingDimensionsType;
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
      type: "ActiveBillingDimensionsAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ActiveBillingDimensionsType",
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
    return ActiveBillingDimensionsBody.attributeTypeMap;
  }

  public constructor() {}
}
