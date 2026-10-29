/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallPageScheduledActionType } from "./OnCallPageScheduledActionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Reference to the next scheduled action on the Page.
 */
export class OnCallPageScheduledActionRelationshipData {
  /**
   * The ID of the scheduled action. Equal to the Page ID.
   */
  "id": string;
  /**
   * Scheduled action resource type.
   */
  "type": OnCallPageScheduledActionType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OnCallPageScheduledActionType",
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
    return OnCallPageScheduledActionRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
