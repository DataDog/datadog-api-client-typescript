/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MicrosoftTeamsApiHandleAttributes } from "./MicrosoftTeamsApiHandleAttributes";
import { MicrosoftTeamsApiHandleType } from "./MicrosoftTeamsApiHandleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Handle data from a response.
 */
export class MicrosoftTeamsUpdateApiHandleRequestData {
  /**
   * Handle attributes.
   */
  "attributes": MicrosoftTeamsApiHandleAttributes;
  /**
   * Specifies the handle resource type.
   */
  "type": MicrosoftTeamsApiHandleType;

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
      type: "MicrosoftTeamsApiHandleAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MicrosoftTeamsApiHandleType",
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
    return MicrosoftTeamsUpdateApiHandleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
