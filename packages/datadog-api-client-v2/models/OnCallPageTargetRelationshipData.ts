/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallPageTargetRelationshipDataType } from "./OnCallPageTargetRelationshipDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Reference to the target of the page.
 */
export class OnCallPageTargetRelationshipData {
  /**
   * The ID of the target.
   */
  "id": string;
  /**
   * The resource type of the page target.
   */
  "type": OnCallPageTargetRelationshipDataType;

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
      type: "OnCallPageTargetRelationshipDataType",
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
    return OnCallPageTargetRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
