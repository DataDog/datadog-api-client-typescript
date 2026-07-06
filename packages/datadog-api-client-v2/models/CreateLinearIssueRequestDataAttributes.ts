/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CasePriority } from "./CasePriority";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the Linear issue to create.
 */
export class CreateLinearIssueRequestDataAttributes {
  /**
   * Unique identifier of the Datadog user assigned to the Linear issue.
   */
  "assigneeId"?: string;
  /**
   * Description of the Linear issue. If not provided, the description will be automatically generated.
   */
  "description"?: string;
  /**
   * Linear label IDs to set on the created issue.
   */
  "labelIds"?: Array<string>;
  /**
   * Unique identifier of the Linear project to pin the issue to. If not provided, the issue is not associated with a Linear project.
   */
  "linearProjectId"?: string;
  /**
   * Case priority
   */
  "priority"?: CasePriority;
  /**
   * Title of the Linear issue. If not provided, the title will be automatically generated.
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
    labelIds: {
      baseName: "label_ids",
      type: "Array<string>",
    },
    linearProjectId: {
      baseName: "linear_project_id",
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
    return CreateLinearIssueRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
