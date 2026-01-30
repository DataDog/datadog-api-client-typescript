/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WorkflowWebhookExecutionResponseAttributes } from "./WorkflowWebhookExecutionResponseAttributes";
import { WorkflowWebhookExecutionResponseType } from "./WorkflowWebhookExecutionResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class WorkflowWebhookExecutionResponseData {
  "attributes": WorkflowWebhookExecutionResponseAttributes;
  /**
   * The unique identifier of the execution
   */
  "id": string;
  /**
   * The type for workflow webhook execution response
   */
  "type": WorkflowWebhookExecutionResponseType;

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
      type: "WorkflowWebhookExecutionResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WorkflowWebhookExecutionResponseType",
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
    return WorkflowWebhookExecutionResponseData.attributeTypeMap;
  }

  public constructor() {}
}
