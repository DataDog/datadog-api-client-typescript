/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JiraIssueLinkAttributes } from "./JiraIssueLinkAttributes";
import { JiraIssueResourceType } from "./JiraIssueResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Jira issue link data
 */
export class JiraIssueLinkData {
  /**
   * Jira issue link attributes
   */
  "attributes": JiraIssueLinkAttributes;
  /**
   * Jira issue resource type
   */
  "type": JiraIssueResourceType;

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
      type: "JiraIssueLinkAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "JiraIssueResourceType",
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
    return JiraIssueLinkData.attributeTypeMap;
  }

  public constructor() {}
}
