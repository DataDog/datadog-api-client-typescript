/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingEvaluation } from "./FindingEvaluation";
import { FindingRule } from "./FindingRule";
import { FindingStatus } from "./FindingStatus";
import { MuteFindingResponseProperties } from "./MuteFindingResponseProperties";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API attributes of the finding.
 */
export class MuteFindingResponseAttributes {
  /**
   * The evaluation of the finding.
   */
  "evaluation"?: FindingEvaluation;
  /**
   * The date on which the evaluation for this finding changed (Unix ms).
   */
  "evaluationChangedAt"?: number;
  /**
   * Information about the mute status of this finding.
   */
  "mute"?: MuteFindingResponseProperties;
  /**
   * The resource name of this finding.
   */
  "resource"?: string;
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
      format: "int64",
    },
    mute: {
      baseName: "mute",
      type: "MuteFindingResponseProperties",
    },
    resource: {
      baseName: "resource",
      type: "string",
    },
    resourceDiscoveryDate: {
      baseName: "resource_discovery_date",
      type: "number",
      format: "int64",
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
  };
}
