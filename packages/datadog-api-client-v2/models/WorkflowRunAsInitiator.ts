/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WorkflowRunAsInitiatorType } from "./WorkflowRunAsInitiatorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Run the workflow as the user who initiates the execution.
 */
export class WorkflowRunAsInitiator {
  /**
   * The initiator run-as type.
   */
  "type": WorkflowRunAsInitiatorType;

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
      type: "WorkflowRunAsInitiatorType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WorkflowRunAsInitiator.attributeTypeMap;
  }

  public constructor() {}
}
