import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipHistoryAttributes } from "./OwnershipHistoryAttributes";
import { OwnershipHistoryType } from "./OwnershipHistoryType";

/**
 * The data wrapper for an ownership history response.
 */
export class OwnershipHistoryData {
  /**
   * The attributes of an ownership history response.
   */
  "attributes": OwnershipHistoryAttributes;
  /**
   * The resource identifier for which history is returned.
   */
  "id": string;
  /**
   * The type of the ownership history resource. The value should always be `ownership_history`.
   */
  "type": OwnershipHistoryType;
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
      type: "OwnershipHistoryAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OwnershipHistoryType",
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
    return OwnershipHistoryData.attributeTypeMap;
  }

  public constructor() {}
}
