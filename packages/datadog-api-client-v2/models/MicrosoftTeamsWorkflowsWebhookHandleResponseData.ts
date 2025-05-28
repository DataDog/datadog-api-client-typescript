/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MicrosoftTeamsWorkflowsWebhookHandleType } from "./MicrosoftTeamsWorkflowsWebhookHandleType";
import { MicrosoftTeamsWorkflowsWebhookResponseAttributes } from "./MicrosoftTeamsWorkflowsWebhookResponseAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Workflows Webhook handle data from a response.
*/
export class MicrosoftTeamsWorkflowsWebhookHandleResponseData {
  /**
   * Workflows Webhook handle attributes.
  */
  "attributes"?: MicrosoftTeamsWorkflowsWebhookResponseAttributes;
  /**
   * The ID of the Workflows webhook handle.
  */
  "id"?: string;
  /**
   * Specifies the Workflows webhook handle resource type.
  */
  "type"?: MicrosoftTeamsWorkflowsWebhookHandleType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "MicrosoftTeamsWorkflowsWebhookResponseAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "MicrosoftTeamsWorkflowsWebhookHandleType",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return MicrosoftTeamsWorkflowsWebhookHandleResponseData.attributeTypeMap;

  }

  public constructor() {











  }
}









