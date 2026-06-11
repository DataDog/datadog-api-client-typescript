import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpsertFormVersionData } from "./UpsertFormVersionData";

/**
 * A request to create or update a form version.
 */
export class UpsertFormVersionRequest {
  /**
   * The data for creating or updating a form version.
   */
  "data": UpsertFormVersionData;
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
      type: "UpsertFormVersionData",
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
    return UpsertFormVersionRequest.attributeTypeMap;
  }

  public constructor() {}
}
