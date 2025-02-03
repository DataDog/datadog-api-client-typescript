/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MicrosoftTeamsWorkflowsWebhookHandleRequestData } from "./MicrosoftTeamsWorkflowsWebhookHandleRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create Workflows webhook handle request.
 */
export class MicrosoftTeamsCreateWorkflowsWebhookHandleRequest {
  /**
   * Workflows Webhook handle data from a response.
   */
  "data": MicrosoftTeamsWorkflowsWebhookHandleRequestData;

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
    data: {
      baseName: "data",
      type: "MicrosoftTeamsWorkflowsWebhookHandleRequestData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MicrosoftTeamsCreateWorkflowsWebhookHandleRequest.attributeTypeMap;
  }

  public constructor() {}
}
