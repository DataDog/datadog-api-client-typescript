/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceNowAssignmentGroupAttributes } from "./ServiceNowAssignmentGroupAttributes";
import { ServiceNowAssignmentGroupType } from "./ServiceNowAssignmentGroupType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
