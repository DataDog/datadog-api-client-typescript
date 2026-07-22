/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingLinearIssueResult } from "./FindingLinearIssueResult";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Linear issue associated with the case.
*/
export class FindingLinearIssue {
  /**
   * Error message if the Linear issue creation failed.
  */
  "errorMessage"?: string;
  /**
   * Result of the Linear issue creation.
  */
  "result"?: FindingLinearIssueResult;
  /**
   * Status of the Linear issue creation. Can be "COMPLETED" if the Linear issue was created successfully, or "FAILED" if the Linear issue creation failed.
  */
  "status"?: string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "errorMessage": {
      "baseName": "error_message",
      "type": "string",
    },
    "result": {
      "baseName": "result",
      "type": "FindingLinearIssueResult",
    },
    "status": {
      "baseName": "status",
      "type": "string",
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




    return FindingLinearIssue.attributeTypeMap;

  }

  public constructor() {











  }
}









