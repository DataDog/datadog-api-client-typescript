import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationKeyResponseIncludedItem } from "./ApplicationKeyResponseIncludedItem";
import { FullApplicationKey } from "./FullApplicationKey";

/**
 * Response for retrieving an application key.
 */
export class ApplicationKeyResponse {
  /**
   * Datadog application key.
   */
  "data"?: FullApplicationKey;
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
      type: "FullApplicationKey",
    },
    included: {
      baseName: "included",
      type: "Array<ApplicationKeyResponseIncludedItem>",
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
    return ApplicationKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
