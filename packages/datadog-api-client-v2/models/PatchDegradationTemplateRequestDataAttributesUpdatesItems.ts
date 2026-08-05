/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateDegradationRequestDataAttributesStatus } from "./CreateDegradationRequestDataAttributesStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A pre-filled update for a degradation created from this template.
 */
export class PatchDegradationTemplateRequestDataAttributesUpdatesItems {
  /**
   * The message of the update.
   */
  "message"?: string;
  /**
   * The status of the degradation.
   */
  "status": CreateDegradationRequestDataAttributesStatus;

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
    message: {
      baseName: "message",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "CreateDegradationRequestDataAttributesStatus",
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
    return PatchDegradationTemplateRequestDataAttributesUpdatesItems.attributeTypeMap;
  }

  public constructor() {}
}
