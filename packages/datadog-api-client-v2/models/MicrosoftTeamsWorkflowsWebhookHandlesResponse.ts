/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MicrosoftTeamsWorkflowsWebhookHandleResponseData } from "./MicrosoftTeamsWorkflowsWebhookHandleResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a list of Workflows webhook handles.
 */
export class MicrosoftTeamsWorkflowsWebhookHandlesResponse {
  /**
   * An array of Workflows webhook handles.
   */
  "data": Array<MicrosoftTeamsWorkflowsWebhookHandleResponseData>;

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
      type: "Array<MicrosoftTeamsWorkflowsWebhookHandleResponseData>",
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
    return MicrosoftTeamsWorkflowsWebhookHandlesResponse.attributeTypeMap;
  }

  public constructor() {}
}
