import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The paging attributes for listing security signals.
 */
export class SecurityMonitoringSignalListRequestPage {
  /**
   * A list of results using the cursor provided in the previous query.
   */
  "cursor"?: string;
  /**
   * The maximum number of security signals in the response.
   */
  "limit"?: number;
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
    cursor: {
      baseName: "cursor",
      type: "string",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int32",
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
    return SecurityMonitoringSignalListRequestPage.attributeTypeMap;
  }

  public constructor() {}
}
