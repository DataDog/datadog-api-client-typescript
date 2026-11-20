/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueStreamPersona } from "./IssueStreamPersona";
import { IssueStreamSort } from "./IssueStreamSort";
import { IssueStreamState } from "./IssueStreamState";
import { UnifiedIssueStreamQueryDataSource } from "./UnifiedIssueStreamQueryDataSource";
import { UnifiedIssueStreamQueryInvestigation } from "./UnifiedIssueStreamQueryInvestigation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class UnifiedIssueStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "assigneeUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "codeGenFixStates"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": UnifiedIssueStreamQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "investigation"?: UnifiedIssueStreamQueryInvestigation;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "muted"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "persona"?: IssueStreamPersona;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryString": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: IssueStreamSort;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "states"?: Array<IssueStreamState>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "suspectedCauses"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "teamHandles"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    assigneeUuids: {
      baseName: "assignee_uuids",
      type: "Array<string>",
    },
    codeGenFixStates: {
      baseName: "code_gen_fix_states",
      type: "Array<string>",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "UnifiedIssueStreamQueryDataSource",
      required: true,
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    investigation: {
      baseName: "investigation",
      type: "UnifiedIssueStreamQueryInvestigation",
    },
    muted: {
      baseName: "muted",
      type: "boolean",
    },
    persona: {
      baseName: "persona",
      type: "IssueStreamPersona",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "IssueStreamSort",
    },
    states: {
      baseName: "states",
      type: "Array<IssueStreamState>",
    },
    suspectedCauses: {
      baseName: "suspected_causes",
      type: "Array<string>",
    },
    teamHandles: {
      baseName: "team_handles",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UnifiedIssueStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
