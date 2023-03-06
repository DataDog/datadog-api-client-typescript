/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JiraIntegrationMetadataIssuesItem } from "./JiraIntegrationMetadataIssuesItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident integration metadata for the Jira integration.
 */
export class JiraIntegrationMetadata {
  /**
   * Array of Jira issues in this integration metadata.
   */
  "issues": Array<JiraIntegrationMetadataIssuesItem>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    issues: {
      baseName: "issues",
      type: "Array<JiraIntegrationMetadataIssuesItem>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return JiraIntegrationMetadata.attributeTypeMap;
  }

  public constructor() {}
}
