import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Visibility information for identifying instance details.
 */
export class AiGatewayRestrictedDetailsMeta {
  /**
   * Whether identifying rows were withheld from the returned page. Pagination uses the underlying rows.
   */
  "restrictedDetails": boolean;
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
    restrictedDetails: {
      baseName: "restricted_details",
      type: "boolean",
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
    return AiGatewayRestrictedDetailsMeta.attributeTypeMap;
  }

  public constructor() {}
}
