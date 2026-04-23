/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultGitUser } from "./SyntheticsTestResultGitUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of the Git commit associated with the test result.
 */
export class SyntheticsTestResultGitCommit {
  /**
   * A Git user (author or committer).
   */
  "author"?: SyntheticsTestResultGitUser;
  /**
   * A Git user (author or committer).
   */
  "committer"?: SyntheticsTestResultGitUser;
  /**
   * Commit message.
   */
  "message"?: string;
  /**
   * Commit SHA.
   */
  "sha"?: string;
  /**
   * URL of the commit.
   */
  "url"?: string;

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
    author: {
      baseName: "author",
      type: "SyntheticsTestResultGitUser",
    },
    committer: {
      baseName: "committer",
      type: "SyntheticsTestResultGitUser",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    sha: {
      baseName: "sha",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
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
    return SyntheticsTestResultGitCommit.attributeTypeMap;
  }

  public constructor() {}
}
