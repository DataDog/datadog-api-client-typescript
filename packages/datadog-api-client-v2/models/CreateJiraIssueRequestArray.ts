/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateJiraIssueRequestArrayIncluded } from "./CreateJiraIssueRequestArrayIncluded";
import { CreateJiraIssueRequestData } from "./CreateJiraIssueRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of requests to create Jira issues for security findings.
 */
export class CreateJiraIssueRequestArray {
  "data": Array<CreateJiraIssueRequestData>;
  "included"?: Array<CreateJiraIssueRequestArrayIncluded>;

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
      type: "Array<CreateJiraIssueRequestData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<CreateJiraIssueRequestArrayIncluded>",
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
    return CreateJiraIssueRequestArray.attributeTypeMap;
  }

  public constructor() {}
}
