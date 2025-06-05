/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingEvaluation } from "./FindingEvaluation";
import { FindingMute } from "./FindingMute";
import { FindingRule } from "./FindingRule";
import { FindingStatus } from "./FindingStatus";
import { FindingVulnerabilityType } from "./FindingVulnerabilityType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API attributes of the finding.
 */
export class FindingAttributes {
  /**
   * The Datadog relative link for this finding.
   */
  "datadogLink"?: string;
  /**
   * The description and remediation steps for this finding.
   */
  "description"?: string;
  /**
   * The evaluation of the finding.
   */
  "evaluation"?: FindingEvaluation;
  /**
   * The date on which the evaluation for this finding changed (Unix ms).
   */
  "evaluationChangedAt"?: number;
  /**
   * The cloud-based ID for the resource related to the finding.
   */
  "externalId"?: string;
  /**
   * Information about the mute status of this finding.
   */
  "mute"?: FindingMute;
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
   * The vulnerability type of the finding.
   */
  "vulnerabilityType"?: FindingVulnerabilityType;

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
    datadogLink: {
      baseName: "datadog_link",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    evaluation: {
      baseName: "evaluation",
      type: "FindingEvaluation",
    },
    evaluationChangedAt: {
      baseName: "evaluation_changed_at",
      type: "number",
      format: "int64",
    },
    externalId: {
      baseName: "external_id",
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
    vulnerabilityType: {
      baseName: "vulnerability_type",
      type: "FindingVulnerabilityType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FindingAttributes.attributeTypeMap;
  }

  public constructor() {}
}
