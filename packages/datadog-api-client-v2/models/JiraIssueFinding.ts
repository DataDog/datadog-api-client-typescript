/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingStatus } from "./FindingStatus";
import { JiraIssueFindingId } from "./JiraIssueFindingId";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class JiraIssueFinding {
  /**
   * Description of the finding.
   */
  "description": string;
  "ids": Array<JiraIssueFindingId>;
  /**
   * Number of impacted resources.
   */
  "impacted"?: number;
  /**
   * References for the finding.
   */
  "references": string;
  /**
   * Remediation instructions for the finding.
   */
  "remediation": string;
  /**
   * The status of the finding.
   */
  "severity": FindingStatus;
  /**
   * Title of the finding.
   */
  "title": string;
  /**
   * Type of the finding.
   */
  "type": string;

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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    ids: {
      baseName: "ids",
      type: "Array<JiraIssueFindingId>",
      required: true,
    },
    impacted: {
      baseName: "impacted",
      type: "number",
      format: "int64",
    },
    references: {
      baseName: "references",
      type: "string",
      required: true,
    },
    remediation: {
      baseName: "remediation",
      type: "string",
      required: true,
    },
    severity: {
      baseName: "severity",
      type: "FindingStatus",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return JiraIssueFinding.attributeTypeMap;
  }

  public constructor() {}
}
