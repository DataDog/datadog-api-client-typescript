/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AssigneeDataType } from "./AssigneeDataType";
import { AssigneeResponseDataAttributes } from "./AssigneeResponseDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the assignee response.
 */
export class AssigneeResponseData {
  /**
   * Attributes of the assignee response.
   */
  "attributes": AssigneeResponseDataAttributes;
  /**
   * Unique identifier of the assignee request.
   */
  "id": string;
  /**
   * Assignee resource type.
   */
  "type": AssigneeDataType;

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
      type: "AssigneeResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AssigneeDataType",
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
    return AssigneeResponseData.attributeTypeMap;
  }

  public constructor() {}
}
