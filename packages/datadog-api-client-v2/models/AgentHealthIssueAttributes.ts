/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an open Agent Health issue.
 */
export class AgentHealthIssueAttributes {
  /**
   * The category of the issue, such as `configuration`. Omitted when not set.
   */
  "category"?: string;
  /**
   * The description of the issue. Omitted when empty.
   */
  "description"?: string;
  /**
   * The time the issue was first seen, in RFC 3339 format. Omitted when empty.
   */
  "firstSeenAt"?: Date;
  /**
   * The human-readable name of the issue.
   */
  "issueName": string;
  /**
   * The machine-readable type of the issue.
   */
  "issueType": string;
  /**
   * The identifier of the affected resource, interpreted according to `resource_kind`: hostname for `host`, DaemonSet UID for `deployment` (node Agent), cluster UUID for `cluster`, hostname of the host running the Cluster Agent for `cluster_agent`, or OpenTelemetry collector ID for `otel`.
   */
  "resourceId": string;
  /**
   * The kind of affected resource. Known values are `host`, `deployment`, `cluster`, `cluster_agent`, and `otel`.
   */
  "resourceKind": string;
  /**
   * The type of the affected resource. Omitted when empty.
   */
  "resourceType"?: string;
  /**
   * The severity of the issue. Known values are `low`, `medium`, `high`, and `unknown`.
   */
  "severity": string;
  /**
   * The state of the issue. Only issues with state `open` are returned.
   */
  "state": string;
  /**
   * Tags associated with the issue. Omitted when empty.
   */
  "tags"?: Array<string>;
  /**
   * The title of the issue. Omitted when empty.
   */
  "title"?: string;
  /**
   * The time the issue was last updated, in RFC 3339 format. Omitted when empty.
   */
  "updatedAt"?: Date;

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
    category: {
      baseName: "category",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    firstSeenAt: {
      baseName: "first_seen_at",
      type: "Date",
      format: "date-time",
    },
    issueName: {
      baseName: "issue_name",
      type: "string",
      required: true,
    },
    issueType: {
      baseName: "issue_type",
      type: "string",
      required: true,
    },
    resourceId: {
      baseName: "resource_id",
      type: "string",
      required: true,
    },
    resourceKind: {
      baseName: "resource_kind",
      type: "string",
      required: true,
    },
    resourceType: {
      baseName: "resource_type",
      type: "string",
    },
    severity: {
      baseName: "severity",
      type: "string",
      required: true,
    },
    state: {
      baseName: "state",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
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
    return AgentHealthIssueAttributes.attributeTypeMap;
  }

  public constructor() {}
}
