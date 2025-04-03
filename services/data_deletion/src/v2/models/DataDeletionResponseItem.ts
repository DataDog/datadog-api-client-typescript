import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DataDeletionResponseItemAttributes } from "./DataDeletionResponseItemAttributes";

/**
 * The created data deletion request information.
 */
export class DataDeletionResponseItem {
  /**
   * Deletion attribute for data deletion response.
   */
  "attributes": DataDeletionResponseItemAttributes;
  /**
   * The ID of the created data deletion request.
   */
  "id": string;
  /**
   * The type of the request created.
   */
  "type": string;
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
      type: "DataDeletionResponseItemAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
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
    return DataDeletionResponseItem.attributeTypeMap;
  }

  public constructor() {}
}
