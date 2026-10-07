import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudCostAccountAttributes } from "./CloudCostAccountAttributes";
import { CloudCostAccountType } from "./CloudCostAccountType";

/**
 * A Cloud Cost Management account.
 */
export class CloudCostAccount {
  /**
   * Read-only status and identifiers for a cloud cost account.
   */
  "attributes": CloudCostAccountAttributes;
  /**
   * The Datadog cloud account ID used by the account filters API.
   */
  "id": string;
  /**
   * Type of a cloud cost account.
   */
  "type": CloudCostAccountType;
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
      type: "CloudCostAccountAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CloudCostAccountType",
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
    return CloudCostAccount.attributeTypeMap;
  }

  public constructor() {}
}
