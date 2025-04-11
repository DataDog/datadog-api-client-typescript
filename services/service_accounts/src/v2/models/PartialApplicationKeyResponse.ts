import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationKeyResponseIncludedItem } from "./ApplicationKeyResponseIncludedItem";
import { PartialApplicationKey } from "./PartialApplicationKey";

/**
 * Response for retrieving a partial application key.
 */
export class PartialApplicationKeyResponse {
  /**
   * Partial Datadog application key.
   */
  "data"?: PartialApplicationKey;
  /**
   * Array of objects related to the application key.
   */
  "included"?: Array<ApplicationKeyResponseIncludedItem>;
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
      type: "PartialApplicationKey",
    },
    included: {
      baseName: "included",
      type: "Array<ApplicationKeyResponseIncludedItem>",
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
    return PartialApplicationKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
