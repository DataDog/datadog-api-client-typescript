/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueCaseLinearIssueResult } from "./IssueCaseLinearIssueResult";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Linear issue of the case.
 */
export class IssueCaseLinearIssue {
  /**
   * Error message set when the Linear issue creation fails.
   */
  "errorMessage"?: string;
  /**
   * Contains the identifiers and URL for a successfully created Linear issue.
   */
  "result"?: IssueCaseLinearIssueResult;
  /**
   * Creation status of the Linear issue.
   */
  "status"?: string;

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
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
    result: {
      baseName: "result",
      type: "IssueCaseLinearIssueResult",
    },
    status: {
      baseName: "status",
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
    return IssueCaseLinearIssue.attributeTypeMap;
  }

  public constructor() {}
}
