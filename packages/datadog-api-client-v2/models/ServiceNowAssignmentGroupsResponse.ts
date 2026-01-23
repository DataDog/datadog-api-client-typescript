/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceNowAssignmentGroupData } from "./ServiceNowAssignmentGroupData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing ServiceNow assignment groups
 */
export class ServiceNowAssignmentGroupsResponse {
  /**
   * Array of ServiceNow assignment group data objects
   */
  "data": Array<ServiceNowAssignmentGroupData>;

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
      type: "Array<ServiceNowAssignmentGroupData>",
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
    return ServiceNowAssignmentGroupsResponse.attributeTypeMap;
  }

  public constructor() {}
}
