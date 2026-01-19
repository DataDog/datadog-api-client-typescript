import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraAccountAttributes } from "./JiraAccountAttributes";
import { JiraAccountType } from "./JiraAccountType";

/**
 * Data object for a Jira account
 */
export class JiraAccountData {
  /**
   * Attributes of a Jira account
   */
  "attributes": JiraAccountAttributes;
  /**
   * Unique identifier for the Jira account
   */
  "id": string;
  /**
   * Type identifier for Jira account resources
   */
  "type": JiraAccountType;
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
    attributes: {
      baseName: "attributes",
      type: "JiraAccountAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "JiraAccountType",
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
    return JiraAccountData.attributeTypeMap;
  }

  public constructor() {}
}
