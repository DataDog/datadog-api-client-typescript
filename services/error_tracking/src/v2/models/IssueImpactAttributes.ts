import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueImpactAccounts } from "./IssueImpactAccounts";
import { IssueImpactEndpoints } from "./IssueImpactEndpoints";
import { IssueImpactErrorCounts } from "./IssueImpactErrorCounts";
import { IssueImpactSessions } from "./IssueImpactSessions";
import { IssueImpactUsers } from "./IssueImpactUsers";
import { IssueImpactViews } from "./IssueImpactViews";

/**
 * The issue's errors in the time window, and the users, sessions, accounts, views, and endpoints they affect.
 */
export class IssueImpactAttributes {
  /**
   * Accounts whose users are affected by the issue.
   */
  "accounts": IssueImpactAccounts;
  /**
   * Endpoints whose traces have the issue's errors, identified by each trace's root span.
   */
  "endpoints": IssueImpactEndpoints;
  /**
   * Number of errors reported by each source. Several sources can report the same error, such as an APM span and
   * a log, so the counts overlap: don't add them together.
   */
  "errorCounts": IssueImpactErrorCounts;
  /**
   * RUM sessions where the issue occurred.
   */
  "sessions": IssueImpactSessions;
  /**
   * Users affected by the issue.
   */
  "users": IssueImpactUsers;
  /**
   * RUM views where the issue occurred.
   */
  "views": IssueImpactViews;
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
    accounts: {
      baseName: "accounts",
      type: "IssueImpactAccounts",
      required: true,
    },
    endpoints: {
      baseName: "endpoints",
      type: "IssueImpactEndpoints",
      required: true,
    },
    errorCounts: {
      baseName: "error_counts",
      type: "IssueImpactErrorCounts",
      required: true,
    },
    sessions: {
      baseName: "sessions",
      type: "IssueImpactSessions",
      required: true,
    },
    users: {
      baseName: "users",
      type: "IssueImpactUsers",
      required: true,
    },
    views: {
      baseName: "views",
      type: "IssueImpactViews",
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
    return IssueImpactAttributes.attributeTypeMap;
  }

  public constructor() {}
}
