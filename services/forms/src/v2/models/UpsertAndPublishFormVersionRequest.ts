import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpsertAndPublishFormVersionData } from "./UpsertAndPublishFormVersionData";

/**
 * A request to upsert and publish a form version in a single transaction.
 */
export class UpsertAndPublishFormVersionRequest {
  /**
   * The data for upserting and publishing a form version.
   */
  "data": UpsertAndPublishFormVersionData;
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
      type: "UpsertAndPublishFormVersionData",
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
    return UpsertAndPublishFormVersionRequest.attributeTypeMap;
  }

  public constructor() {}
}
