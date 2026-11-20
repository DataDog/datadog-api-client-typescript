import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueStreamPersona } from "./IssueStreamPersona";
import { IssueStreamSort } from "./IssueStreamSort";
import { IssueStreamState } from "./IssueStreamState";
import { LogsIssueStreamQueryDataSource } from "./LogsIssueStreamQueryDataSource";
import { LogsIssueStreamQueryInvestigation } from "./LogsIssueStreamQueryInvestigation";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LogsIssueStreamQuery {
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
  "dataSource": LogsIssueStreamQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "investigation"?: LogsIssueStreamQueryInvestigation;
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
      type: "LogsIssueStreamQueryDataSource",
      required: true,
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    investigation: {
      baseName: "investigation",
      type: "LogsIssueStreamQueryInvestigation",
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
    return LogsIssueStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
