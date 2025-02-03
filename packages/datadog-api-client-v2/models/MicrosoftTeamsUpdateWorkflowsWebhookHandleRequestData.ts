/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MicrosoftTeamsWorkflowsWebhookHandleAttributes } from "./MicrosoftTeamsWorkflowsWebhookHandleAttributes";
import { MicrosoftTeamsWorkflowsWebhookHandleType } from "./MicrosoftTeamsWorkflowsWebhookHandleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Workflows Webhook handle data from a response.
 */
export class MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData {
  /**
   * Workflows Webhook handle attributes.
   */
  "attributes": MicrosoftTeamsWorkflowsWebhookHandleAttributes;
  /**
   * Specifies the Workflows webhook handle resource type.
   */
  "type": MicrosoftTeamsWorkflowsWebhookHandleType;

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
      type: "MicrosoftTeamsWorkflowsWebhookHandleAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MicrosoftTeamsWorkflowsWebhookHandleType",
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
    return MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
