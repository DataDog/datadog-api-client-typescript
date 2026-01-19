/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JiraIssueTemplateUpdateRequestData } from "./JiraIssueTemplateUpdateRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to update a Jira issue template
 */
export class JiraIssueTemplateUpdateRequest {
  /**
   * Data object for updating a Jira issue template
   */
  "data": JiraIssueTemplateUpdateRequestData;

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
      type: "JiraIssueTemplateUpdateRequestData",
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
    return JiraIssueTemplateUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
