/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WorkflowRunAsServiceAccountType } from "./WorkflowRunAsServiceAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
