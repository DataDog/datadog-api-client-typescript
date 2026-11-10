/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssuePullRequestReference } from "./IssuePullRequestReference";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship between the issue and its linked pull requests. Returned when `pull_requests` is included and the issue has linked pull requests.
 */
export class IssuePullRequestsRelationship {
  /**
   * Array of pull requests linked to the issue.
   */
  "data": Array<IssuePullRequestReference>;

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
      type: "Array<IssuePullRequestReference>",
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
    return IssuePullRequestsRelationship.attributeTypeMap;
  }

  public constructor() {}
}
