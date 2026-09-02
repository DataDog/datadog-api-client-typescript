import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowRunAsServiceAccountType } from "./WorkflowRunAsServiceAccountType";

/**
 * Run the workflow as a service account.
 */
export class WorkflowRunAsServiceAccount {
  /**
   * The service account identifier.
   */
  "id": string;
  /**
   * The service account run-as type.
   */
  "type": WorkflowRunAsServiceAccountType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WorkflowRunAsServiceAccountType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WorkflowRunAsServiceAccount.attributeTypeMap;
  }

  public constructor() {}
}
