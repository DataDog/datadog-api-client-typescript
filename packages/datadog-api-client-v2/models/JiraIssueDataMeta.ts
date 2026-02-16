/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JiraIssueFinding } from "./JiraIssueFinding";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class JiraIssueDataMeta {
  "findings"?: Array<JiraIssueFinding>;
  "vulnerabilities"?: Array<JiraIssueFinding>;

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
    findings: {
      baseName: "findings",
      type: "Array<JiraIssueFinding>",
    },
    vulnerabilities: {
      baseName: "vulnerabilities",
      type: "Array<JiraIssueFinding>",
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
    return JiraIssueDataMeta.attributeTypeMap;
  }

  public constructor() {}
}
