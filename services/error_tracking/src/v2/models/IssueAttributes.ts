import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueLanguage } from "./IssueLanguage";
import { IssuePlatform } from "./IssuePlatform";
import { IssueState } from "./IssueState";

/**
 * Object containing the information of an issue.
 */
export class IssueAttributes {
  /**
   * Error message associated with the issue.
   */
  "errorMessage"?: string;
  /**
   * Type of the error that matches the issue.
   */
  "errorType"?: string;
  /**
   * Path of the file where the issue occurred.
   */
  "filePath"?: string;
  /**
   * Timestamp of the first seen error in milliseconds since the Unix epoch.
   */
  "firstSeen"?: number;
  /**
   * The application version (for example, git commit hash) where the issue was first observed.
   */
  "firstSeenVersion"?: string;
  /**
   * Name of the function where the issue occurred.
   */
  "functionName"?: string;
  /**
   * Error is a crash.
   */
  "isCrash"?: boolean;
  /**
   * Array of programming languages associated with the issue.
   */
  "languages"?: Array<IssueLanguage>;
  /**
   * Timestamp of the last seen error in milliseconds since the Unix epoch.
   */
  "lastSeen"?: number;
  /**
   * The application version (for example, git commit hash) where the issue was last observed.
   */
  "lastSeenVersion"?: string;
  /**
   * Platform associated with the issue.
   */
  "platform"?: IssuePlatform;
  /**
   * Service name.
   */
  "service"?: string;
  /**
   * State of the issue
   */
  "state"?: IssueState;
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
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
    errorType: {
      baseName: "error_type",
      type: "string",
    },
    filePath: {
      baseName: "file_path",
      type: "string",
    },
    firstSeen: {
      baseName: "first_seen",
      type: "number",
      format: "int64",
    },
    firstSeenVersion: {
      baseName: "first_seen_version",
      type: "string",
    },
    functionName: {
      baseName: "function_name",
      type: "string",
    },
    isCrash: {
      baseName: "is_crash",
      type: "boolean",
    },
    languages: {
      baseName: "languages",
      type: "Array<IssueLanguage>",
    },
    lastSeen: {
      baseName: "last_seen",
      type: "number",
      format: "int64",
    },
    lastSeenVersion: {
      baseName: "last_seen_version",
      type: "string",
    },
    platform: {
      baseName: "platform",
      type: "IssuePlatform",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    state: {
      baseName: "state",
      type: "IssueState",
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
    return IssueAttributes.attributeTypeMap;
  }

  public constructor() {}
}
