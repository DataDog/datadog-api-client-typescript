import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowAssignmentGroupAttributes } from "./ServiceNowAssignmentGroupAttributes";
import { ServiceNowAssignmentGroupType } from "./ServiceNowAssignmentGroupType";

/**
 * Data object for a ServiceNow assignment group
 */
export class ServiceNowAssignmentGroupData {
  /**
   * Attributes of a ServiceNow assignment group
   */
  "attributes": ServiceNowAssignmentGroupAttributes;
  /**
   * Unique identifier for the ServiceNow assignment group
   */
  "id": string;
  /**
   * Type identifier for ServiceNow assignment group resources
   */
  "type": ServiceNowAssignmentGroupType;
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
      type: "ServiceNowAssignmentGroupAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ServiceNowAssignmentGroupType",
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
    return ServiceNowAssignmentGroupData.attributeTypeMap;
  }

  public constructor() {}
}
