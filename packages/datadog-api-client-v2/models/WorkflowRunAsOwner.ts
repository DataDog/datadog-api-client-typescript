/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WorkflowRunAsOwnerType } from "./WorkflowRunAsOwnerType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Run the workflow as its owner.
 */
export class WorkflowRunAsOwner {
  /**
   * The owner run-as type.
   */
  "type": WorkflowRunAsOwnerType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "WorkflowRunAsOwnerType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WorkflowRunAsOwner.attributeTypeMap;
  }

  public constructor() {}
}
