/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Creator } from "./Creator";
import { MonitorOverallStates } from "./MonitorOverallStates";
import { MonitorSearchResultNotification } from "./MonitorSearchResultNotification";
import { MonitorType } from "./MonitorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Holds search results.
 */
export class MonitorSearchResult {
  /**
   * Classification of the monitor.
   */
  "classification"?: string;
  /**
   * Object describing the creator of the shared element.
   */
  "creator"?: Creator;
  /**
   * ID of the monitor.
   */
  "id"?: number;
  /**
   * Latest timestamp the monitor triggered.
   */
  "lastTriggeredTs"?: number;
  /**
   * Metrics used by the monitor.
   */
  "metrics"?: Array<string>;
  /**
   * The monitor name.
   */
  "name"?: string;
  /**
   * The notification triggered by the monitor.
   */
  "notifications"?: Array<MonitorSearchResultNotification>;
  /**
   * The ID of the organization.
   */
  "orgId"?: number;
  /**
   * Quality issues detected with the monitor.
   */
  "qualityIssues"?: Array<string>;
  /**
   * The monitor query.
   */
  "query"?: string;
  /**
   * The scope(s) to which the downtime applies, for example `host:app2`.
   * Provide multiple scopes as a comma-separated list, for example `env:dev,env:prod`.
   * The resulting downtime applies to sources that matches ALL provided scopes
   * (that is `env:dev AND env:prod`), NOT any of them.
   */
  "scopes"?: Array<string>;
  /**
   * The different states your monitor can be in.
   */
  "status"?: MonitorOverallStates;
  /**
   * Tags associated with the monitor.
   */
  "tags"?: Array<string>;
  /**
   * The type of the monitor. For more information about `type`, see the [monitor options](https://docs.datadoghq.com/monitors/guide/monitor_api_options/) docs.
   */
  "type"?: MonitorType;

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
    classification: {
      baseName: "classification",
      type: "string",
    },
    creator: {
      baseName: "creator",
      type: "Creator",
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    lastTriggeredTs: {
      baseName: "last_triggered_ts",
      type: "number",
      format: "int64",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    notifications: {
      baseName: "notifications",
      type: "Array<MonitorSearchResultNotification>",
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      format: "int64",
    },
    qualityIssues: {
      baseName: "quality_issues",
      type: "Array<string>",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    scopes: {
      baseName: "scopes",
      type: "Array<string>",
    },
    status: {
      baseName: "status",
      type: "MonitorOverallStates",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "MonitorType",
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
    return MonitorSearchResult.attributeTypeMap;
  }

  public constructor() {}
}
