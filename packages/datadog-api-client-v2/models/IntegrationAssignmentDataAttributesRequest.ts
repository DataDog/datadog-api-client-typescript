/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IntegrationAssignmentDataAttributesRequestAction } from "./IntegrationAssignmentDataAttributesRequestAction";
import { IntegrationAssignmentDataAttributesRequestAssignment } from "./IntegrationAssignmentDataAttributesRequestAssignment";
import { IntegrationAssignmentDataAttributesRequestType } from "./IntegrationAssignmentDataAttributesRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class IntegrationAssignmentDataAttributesRequest {
  /**
   * Action to perform on the assignment. Can be "assign" or "un_assign".
   */
  "action": IntegrationAssignmentDataAttributesRequestAction;
  "assignment": IntegrationAssignmentDataAttributesRequestAssignment;
  /**
   * Type of the security issues. Can be "findings" or "vulnerabilities".
   */
  "type": IntegrationAssignmentDataAttributesRequestType;

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
    action: {
      baseName: "action",
      type: "IntegrationAssignmentDataAttributesRequestAction",
      required: true,
    },
    assignment: {
      baseName: "assignment",
      type: "IntegrationAssignmentDataAttributesRequestAssignment",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IntegrationAssignmentDataAttributesRequestType",
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
    return IntegrationAssignmentDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
