import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Paging attributes.
 */
export class SecurityMonitoringSignalsListResponseMetaPage {
  /**
   * The cursor used to get the next results, if any. To make the next request, use the same
   * parameters with the addition of the `page[cursor]`.
   */
  "after"?: string;
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
    after: {
      baseName: "after",
      type: "string",
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
    return SecurityMonitoringSignalsListResponseMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
