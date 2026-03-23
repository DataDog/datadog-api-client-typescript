import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceListDataAttributes } from "./ServiceListDataAttributes";
import { ServiceListDataType } from "./ServiceListDataType";

/**
 * A single data item in the service list response.
 */
export class ServiceListData {
  /**
   * Attributes of a service list entry, containing metadata and a list of service names.
   */
  "attributes"?: ServiceListDataAttributes;
  /**
   * The unique identifier of the service.
   */
  "id"?: string;
  /**
   * Services list resource type.
   */
  "type": ServiceListDataType;
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
      type: "ServiceListDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ServiceListDataType",
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
    return ServiceListData.attributeTypeMap;
  }

  public constructor() {}
}
