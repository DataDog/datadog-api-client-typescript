/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CasePriority } from "./CasePriority";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the case to create.
 */
export class CreateCaseRequestDataAttributes {
  /**
   * Unique identifier of the user assigned to the case.
   */
  "assigneeId"?: string;
  /**
   * Description of the case. If not provided, the description will be automatically generated.
   */
  "description"?: string;
  /**
   * Case priority
   */
  "priority"?: CasePriority;
  /**
   * Title of the case. If not provided, the title will be automatically generated.
   */
  "title"?: string;

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
    assigneeId: {
      baseName: "assignee_id",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    priority: {
      baseName: "priority",
      type: "CasePriority",
    },
    title: {
      baseName: "title",
      type: "string",
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
    return CreateCaseRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
