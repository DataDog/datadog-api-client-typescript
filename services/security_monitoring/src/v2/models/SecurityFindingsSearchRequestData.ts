import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityFindingsSearchRequestDataAttributes } from "./SecurityFindingsSearchRequestDataAttributes";

/**
 * Request data for searching security findings.
 */
export class SecurityFindingsSearchRequestData {
  /**
   * Request attributes for searching security findings.
   */
  "attributes"?: SecurityFindingsSearchRequestDataAttributes;
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
      type: "SecurityFindingsSearchRequestDataAttributes",
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
    return SecurityFindingsSearchRequestData.attributeTypeMap;
  }

  public constructor() {}
}
