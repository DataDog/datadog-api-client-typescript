import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeleteAppsRequestDataItems } from "./DeleteAppsRequestDataItems";

/**
 * A request object for deleting multiple apps by ID.
 */
export class DeleteAppsRequest {
  /**
   * An array of objects containing the IDs of the apps to delete.
   */
  "data"?: Array<DeleteAppsRequestDataItems>;
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
      type: "Array<DeleteAppsRequestDataItems>",
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
    return DeleteAppsRequest.attributeTypeMap;
  }

  public constructor() {}
}
