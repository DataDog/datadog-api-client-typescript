/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingEvaluation } from "./FindingEvaluation";
import { FindingMute } from "./FindingMute";
import { FindingRule } from "./FindingRule";
import { FindingStatus } from "./FindingStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API attributes of the detailed finding.
 */
export class DetailedFindingAttributes {
  /**
   * The evaluation of the finding.
   */
  "evaluation"?: FindingEvaluation;
  /**
   * The date on which the evaluation for this finding changed (Unix ms).
   */
  "evaluationChangedAt"?: number;
  /**
   * The remediation message for this finding.
   */
  "message"?: string;
  /**
   * Information about the mute status of this finding.
   */
  "mute"?: FindingMute;
  /**
   * The resource name of this finding.
   */
  "resource"?: string;
  /**
   * The resource configuration for this finding.
   */
  "resourceConfiguration"?: any;
  /**
   * The date on which the resource was discovered (Unix ms).
   */
  "resourceDiscoveryDate"?: number;
  /**
   * The resource type of this finding.
   */
  "resourceType"?: string;
  /**
   * The rule that triggered this finding.
   */
  "rule"?: FindingRule;
  /**
   * The status of the finding.
   */
  "status"?: FindingStatus;
  /**
   * The tags associated with this finding.
   */
  "tags"?: Array<string>;

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
    evaluation: {
      baseName: "evaluation",
      type: "FindingEvaluation",
    },
    evaluationChangedAt: {
      baseName: "evaluation_changed_at",
      type: "number",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    mute: {
      baseName: "mute",
      type: "FindingMute",
    },
    resource: {
      baseName: "resource",
      type: "string",
    },
    resourceConfiguration: {
      baseName: "resource_configuration",
      type: "any",
    },
    resourceDiscoveryDate: {
      baseName: "resource_discovery_date",
      type: "number",
    },
    resourceType: {
      baseName: "resource_type",
      type: "string",
    },
    rule: {
      baseName: "rule",
      type: "FindingRule",
    },
    status: {
      baseName: "status",
      type: "FindingStatus",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return DetailedFindingAttributes.attributeTypeMap;
  }

  public constructor() {}
}
