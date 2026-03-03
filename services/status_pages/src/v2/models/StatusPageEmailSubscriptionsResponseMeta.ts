import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageEmailSubscriptionsResponseMetaPage } from "./StatusPageEmailSubscriptionsResponseMetaPage";

/**
 * Metadata for the list of email subscriptions.
 */
export class StatusPageEmailSubscriptionsResponseMeta {
  /**
   * Pagination metadata.
   */
  "page": StatusPageEmailSubscriptionsResponseMetaPage;
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
    page: {
      baseName: "page",
      type: "StatusPageEmailSubscriptionsResponseMetaPage",
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
    return StatusPageEmailSubscriptionsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
