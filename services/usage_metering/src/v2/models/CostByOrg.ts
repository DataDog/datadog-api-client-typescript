import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostByOrgAttributes } from "./CostByOrgAttributes";
import { CostByOrgType } from "./CostByOrgType";

/**
 * Cost data.
 */
export class CostByOrg {
  /**
   * Cost attributes data.
   */
  "attributes"?: CostByOrgAttributes;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  /**
   * Type of cost data.
   */
  "type"?: CostByOrgType;
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
      type: "CostByOrgAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CostByOrgType",
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
    return CostByOrg.attributeTypeMap;
  }

  public constructor() {}
}
