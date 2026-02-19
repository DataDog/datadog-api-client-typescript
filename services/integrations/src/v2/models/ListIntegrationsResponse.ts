import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Integration } from "./Integration";

/**
 * Response containing information about multiple integrations.
 */
export class ListIntegrationsResponse {
  /**
   * Array of integration objects.
   */
  "data": Array<Integration>;
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
      type: "Array<Integration>",
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
    return ListIntegrationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
