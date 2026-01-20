/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JiraAccountData } from "./JiraAccountData";
import { JiraIssueTemplateData } from "./JiraIssueTemplateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing Jira issue templates
 */
export class JiraIssueTemplatesResponse {
  /**
   * Array of Jira issue template data objects
   */
  "data": Array<JiraIssueTemplateData>;
  /**
   * Array of Jira account data objects
   */
  "included"?: Array<JiraAccountData>;

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
      type: "Array<JiraIssueTemplateData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<JiraAccountData>",
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
    return JiraIssueTemplatesResponse.attributeTypeMap;
  }

  public constructor() {}
}
