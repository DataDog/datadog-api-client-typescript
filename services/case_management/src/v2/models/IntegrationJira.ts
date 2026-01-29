import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationJiraAutoCreation } from "./IntegrationJiraAutoCreation";
import { IntegrationJiraMetadata } from "./IntegrationJiraMetadata";
import { IntegrationJiraSync } from "./IntegrationJiraSync";

/**
 * Jira integration settings
 */
export class IntegrationJira {
  "autoCreation"?: IntegrationJiraAutoCreation;
  /**
   * Whether Jira integration is enabled
   */
  "enabled"?: boolean;
  "metadata"?: IntegrationJiraMetadata;
  "sync"?: IntegrationJiraSync;
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
    autoCreation: {
      baseName: "auto_creation",
      type: "IntegrationJiraAutoCreation",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    metadata: {
      baseName: "metadata",
      type: "IntegrationJiraMetadata",
    },
    sync: {
      baseName: "sync",
      type: "IntegrationJiraSync",
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
    return IntegrationJira.attributeTypeMap;
  }

  public constructor() {}
}
