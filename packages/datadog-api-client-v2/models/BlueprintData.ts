/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BlueprintAttributes } from "./BlueprintAttributes";
import { BlueprintDataType } from "./BlueprintDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A blueprint resource.
 */
export class BlueprintData {
  /**
   * The attributes of a blueprint resource.
   */
  "attributes": BlueprintAttributes;
  /**
   * The ID of the blueprint.
   */
  "id": string;
  /**
   * The resource type for a blueprint.
   */
  "type": BlueprintDataType;

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
      type: "BlueprintAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "BlueprintDataType",
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
    return BlueprintData.attributeTypeMap;
  }

  public constructor() {}
}
